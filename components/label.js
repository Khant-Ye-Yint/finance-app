import React from 'react';

const Label = (props) => {
  return (
    <label
      {...props}
      className={` text-gray-700 block dark:text-gray-300 cursor-pointer ${props.className}`}
    ></label>
  );
};

export default Label;
