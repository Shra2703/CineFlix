import BoxSkeleton from "./BoxSkeleton";
import SkeletonLines from "./SkeletonLines";

const SecondaryShimmer = () => {
  return (
    <div>
      <div className="px-10 w-full pb-8 mt-7">
        <SkeletonLines />

        <div className="mt-5 flex gap-4 w-full max-sm:flex-wrap ">
          {Array.from({ length: 5 }).map((_, index) => (
            <BoxSkeleton key={index} classname="w-[30%] h-60 max-sm:w-[45%] max-sm:h-44 "/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryShimmer;
