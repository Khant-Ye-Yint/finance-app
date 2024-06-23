const Input = (props) => {
  const styles = {
    checkbox:
      'text-gray-700 bg-white border-gray-300 rounded shadow-sm cursor-pointer dark:border-gray-700 dark:bg-gray-950 dark:text-gray-500',
    default:
      'w-full bg-white border-gray-300 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-950',
  };

  return (
    <input
      {...props}
      className={styles[props.type] ?? styles['default']}
    ></input>
  );
};

export default Input;
