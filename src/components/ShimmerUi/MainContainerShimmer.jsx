import BoxSkeleton from "./BoxSkeleton";

const MainContainerShimmer = () => {
  return (
    <main className="w-full text-white min-h-[70vh] relative px-10 py-6 max-sm:min-h-[50vh]">
      <BoxSkeleton classname="relative top-14 w-full h-96 max-sm:h-60 max-sm:mb-14" />
    </main>
  );
};

export default MainContainerShimmer;
