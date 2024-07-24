import { forwardRef } from 'react';

const Input = (props, ref) => {
  const styles = {
    checkbox:
      'text-gray-700 bg-white border-gray-300 rounded shadow-sm cursor-pointer dark:border-gray-700 dark:bg-gray-950 dark:text-gray-500 disabled:opacity-75',
    file: 'file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:opacity-50 file:dark:text-gray-400',
    default:
      'w-full bg-white border-gray-300 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-950 disabled:opacity-75',
  };

  return (
    <input
      {...props}
      ref={ref}
      className={`${styles[props.type] ?? styles['default']} ${
        props.className
      }`}
    ></input>
  );
};

export default forwardRef(Input);
