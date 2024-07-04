import { forwardRef } from 'react';

const Input = (props, ref) => {
  const styles = {
    checkbox:
      'text-gray-700 bg-white border-gray-300 rounded shadow-sm cursor-pointer dark:border-gray-700 dark:bg-gray-950 dark:text-gray-500 disabled:opacity-75',
    default:
      'w-full bg-white border-gray-300 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-950 disabled:opacity-75',
  };

  return (
    <input
      {...props}
      ref={ref}
      className={styles[props.type] ?? styles['default']}
    ></input>
  );
};

export default forwardRef(Input);
