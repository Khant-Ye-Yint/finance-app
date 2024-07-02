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
