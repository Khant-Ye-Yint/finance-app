'use server';

// import { revalidateTag } from 'next/cache';
import { createClient } from './supabase/server';
import { revalidatePath } from 'next/cache';
import { transactionSchema } from './validation';
import { redirect } from 'next/navigation';

// export const purgeTransactionListCache = async () => {
//   revalidateTag('transaction-list');
// };

export const createTransaction = async (formData) => {
  const validated = transactionSchema.safeParse(formData);

  if (!validated.success) {
    throw new Error('Invalid Data.');
  }

  const { data, error } = await createClient()
    .from('transactions')
    .insert(validated.data);

  if (error) {
    throw new Error('Failed creating the transaction.');
  }

  revalidatePath('/dashboard');
};

export const updateTransaction = async (id, formData) => {
  const validated = transactionSchema.safeParse(formData);

  if (!validated.success) {
    throw new Error('Invalid Data.');
  }

  const { data, error } = await createClient()
    .from('transactions')
    .update(validated.data)
    .eq('id', id);

  if (error) {
    throw new Error('Failed updating the transaction.');
  }

  revalidatePath('/dashboard');
};

export const fetchTransitions = async (range, offset = 0, limit = 10) => {
  const supabase = createClient();
  const { data, error } = await supabase.rpc('fetch_transactions', {
    limit_arg: limit,
    offset_arg: offset,
    range_arg: range,
  });

  if (error) throw new Error('Could not fetch transitions.');

  return data;
};

export const deleteTransition = async (id) => {
  const supabase = createClient();
  const { error } = await supabase.from('transactions').delete().eq('id', id);
  if (error) throw new Error(`We could not delete the transaction ${id}`);
  revalidatePath('/dashboard');
};

export const login = async (prevState, formData) => {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email: formData.get('email'),
    options: {
      shouldCreateUser: true,
    },
  });

  if (error) {
    return {
      error: true,
      message: 'Error Authenticating!',
    };
  }

  return {
    message: `Email sent to ${formData.get('email')}`,
  };
};

export async function signOut() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  redirect('/login');
}

export async function uploadAvatar(prevState, formData) {
  const supabase = createClient();
  const file = formData.get('file');

  //Original Extension
  const fileExt = file.name.split('.').pop();
  //File name will be generated
  const fileName = `${Math.random()}.${fileExt}`;

  //Upload
  const { error } = await supabase.storage
    .from('avatars')
    .upload(fileName, file);

  if (error) {
    return {
      error: true,
      message: 'Could not upload avatar',
    };
  }

  // Remove old file
  const { data: userData, userError } = await supabase.auth.getUser();

  if (userError) {
    return {
      error: true,
      message: 'Something went wrong, try again.',
    };
  }

  const avatar = userData.user.user_metadata.avatar;

  if (avatar) {
    const { error } = await supabase.storage.from('avatars').remove([avatar]);

    if (error) {
      return {
        error: true,
        message: 'Something went wrong, try again.',
      };
    }
  }

  const { error: dataUpdateError } = await supabase.auth.updateUser({
    data: {
      avatar: fileName,
    },
  });

  if (dataUpdateError) {
    return {
      error: true,
      message: 'Could not associate avatar with user.',
    };
  }

  return {
    error: false,
    message: 'Your avatar has been uploaded!',
  };
}
