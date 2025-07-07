const BoxSkeleton = ({ classname = "" }) => {
  return (
    <div className={"bg-gray-800 animate-pulse rounded-lg " + classname}></div>
  );
};

export default BoxSkeleton;

//  w-[30%] h-60
