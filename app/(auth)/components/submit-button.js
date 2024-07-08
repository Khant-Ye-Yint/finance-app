'use client';

import { varients, sizes } from '@/lib/variants';
import { useFormStatus } from 'react-dom';
import { Loader } from 'lucide-react';

const SubmitButton = (props) => {
  const { varient, size } = props;
  const { pending } = useFormStatus();

  return (
    <button
      className={`${
        varient ? varients[varient] : varients['default']
      } shadow-md  ${size ? sizes[size] : sizes['base']} ${
        props.className
      } flex space-x-1 items-center justify-center `}
      disabled={pending}
    >
      {pending && <Loader className="w-4 h-4 animate-spin" />}{' '}
      <span>{props.children}</span>
    </button>
  );
};

export default SubmitButton;
