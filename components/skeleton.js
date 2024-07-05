const Skeleton = (props) => {
  return (
    <div
      className={`${props.className} skeleton  w-full h-4 bg-gray-700 dark:bg-gray-700 rounded-md`}
    />
  );
};

export default Skeleton;
