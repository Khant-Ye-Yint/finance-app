'use client';
import { varients, sizes } from '@/lib/variants';

const Button = (props) => {
  const { varient, size } = props;

  return (
    <button
      {...props}
      className={`${varient ? varients[varient] : varients['default']}  ${
        size ? sizes[size] : sizes['base']
      } ${props.className}`}
    ></button>
  );
};

export default Button;
