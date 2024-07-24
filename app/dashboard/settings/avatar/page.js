'use client';

import SubmitButton from '@/app/(auth)/components/submit-button';
import Input from '@/components/input';
import { uploadAvatar } from '@/lib/actions';
import Alert from '@/components/alert';
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
        <Input type="file" name="file" id="file" />
        {state?.error && <Alert message={state?.message} />}
        {!state?.error && state?.message && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-current shrink-0"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{state?.message}</span>
          </div>
        )}

        <SubmitButton>Upload Avatar</SubmitButton>
      </form>
    </>
  );
};

export default Page;
