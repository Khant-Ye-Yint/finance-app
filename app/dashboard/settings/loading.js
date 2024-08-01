import Skeleton from '@/components/skeleton';
const Loading = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Skeleton className="h-8 " />
      <Skeleton className="h-8 " />
      <Skeleton className="h-8 " />
      <Skeleton className="h-8 " />
      <Skeleton className="h-8 " />
    </div>
  );
};

export default Loading;
