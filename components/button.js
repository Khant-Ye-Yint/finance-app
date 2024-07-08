'use client';
import { varients, sizes } from '@/lib/variants';
import { motion } from 'framer-motion';

const Button = (props) => {
  const { varient, size } = props;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
      className={`${
        varient ? varients[varient] : varients['default']
      } shadow-md  ${size ? sizes[size] : sizes['base']} ${props.className} `}
    ></motion.button>
  );
};

export default Button;
