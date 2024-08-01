'use client';

import SubmitButton from '@/app/(auth)/components/submit-button';
import Input from '@/components/input';
import { uploadAvatar } from '@/lib/actions';
import AlertError from '@/components/alert-error';
import AlertSuccess from '@/components/alert-success';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
  error: false,
};

const Page = () => {
  const [state, formAction] = useFormState(uploadAvatar, initialState);

  return (
    <>
      <h1 className="mb-8 text-4xl font-semibold ">Avatar</h1>
      <form className="space-y-4 " action={formAction}>
        {state?.error && <AlertError message={state?.message} />}
        {!state?.error && state?.message && (
          <AlertSuccess message={state?.message} />
        )}
        <Input type="file" name="file" id="file" />

        <SubmitButton>Upload Avatar</SubmitButton>
      </form>
    </>
  );
};

export default Page;
