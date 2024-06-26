import { forwardRef } from 'react';

const Select = (props, ref) => {
  return (
    <select
      {...props}
      ref={ref}
      className="w-full bg-white border-gray-300 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-950 "
    ></select>
  );
};

export default forwardRef(Select);
