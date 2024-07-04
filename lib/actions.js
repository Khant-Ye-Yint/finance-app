'use server';

// import { revalidateTag } from 'next/cache';
import { createClient } from './supabase/server';
import { revalidatePath } from 'next/cache';
import { transactionSchema } from './validation';

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
