import Skeleton from '@/components/skeleton';

const TransitionListFallback = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4 ">
        <TransitionItemSummarySkeleton />
        <TransitionItemSkeleton />
        <TransitionItemSkeleton />
        <TransitionItemSkeleton />
      </div>
      <div className="space-y-4 ">
        <TransitionItemSummarySkeleton />
        <TransitionItemSkeleton />
        <TransitionItemSkeleton />
        <TransitionItemSkeleton />
      </div>
    </div>
  );
};

const TransitionItemSkeleton = () => (
  <div className="flex items-center w-full space-x-4 ">
    <div className="flex items-center grow">
      <Skeleton />
    </div>
    <div className=" min-w-[150px] items-center hidden md:flex">
      <Skeleton />
    </div>
    <div className=" min-w-[70px] text-right">
      <Skeleton />
    </div>
    <div className=" min-w-[50px] flex justify-end">
      <Skeleton />
    </div>
  </div>
);

const TransitionItemSummarySkeleton = () => (
  <div className="flex space-x-4">
    <div className=" grow">
      <Skeleton />
    </div>
    <div className=" min-w-[70px] text-right font-semibold">
      <Skeleton />
    </div>
    <div className=" min-w-[50px]"></div>
  </div>
);

export default TransitionListFallback;
