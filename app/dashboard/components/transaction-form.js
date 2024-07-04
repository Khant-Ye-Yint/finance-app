'use client';

import Button from '@/components/button';
import Input from '@/components/input';
import Label from '@/components/label';
import Select from '@/components/select';
import { types, categories } from '@/lib/consts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { transactionSchema } from '@/lib/validation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createTransaction, updateTransaction } from '@/lib/actions';
import FormError from '@/components/form-error';

const TransactionForm = ({ initialData }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: zodResolver(transactionSchema),
    defaultValues: initialData ?? {
      created_at: new Date().toISOString().split('T')[0],
    },
  });

  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState();
  const type = watch('type');
  const editing = Boolean(initialData);

  const submitHandler = async (data) => {
    setSaving(true);
    setError();
    try {
      if (editing) {
        await updateTransaction(initialData.id, data);
      } else {
        await createTransaction(data);
      }
      router.push('/dashboard');
    } catch (err) {
      setError(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form className="space-y-4 " onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label className="mb-1 ">Type</Label>
          <Select
            {...register('type', {
              onChange: (e) => {
                if (e.target.value !== 'Expense') {
                  setValue('category', '');
                }
              },
            })}
          >
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
          <FormError error={errors.type} />
        </div>
        <div>
          <Label className="mb-1 ">Category</Label>
          <Select
            {...register('category')}
            disabled={type !== 'Expense'}
            defaultValue=""
          >
            <option value="" disabled>
              Select your category
            </option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Select>
          <FormError error={errors.category} />
        </div>
        <div>
          <Label className="mb-1 ">Date</Label>
          <Input {...register('created_at')} disabled={editing} />
          <FormError error={errors.created_at} />
        </div>
        <div>
          <Label className="mb-1 ">Amount</Label>
          <Input type="number" {...register('amount')} />
          <FormError error={errors.amount} />
        </div>
        <div className="col-span-1 md:col-span-2 ">
          <Label className="mb-1 ">Description</Label>
          <Input {...register('description')} />
          <FormError error={errors.description} />
        </div>

        <div className="flex items-center justify-between col-span-1 md:col-span-2">
          <div>{error && <FormError error={error} />}</div>
          <Button type="submit" disabled={saving}>
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;
