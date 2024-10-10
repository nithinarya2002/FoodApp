import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="w-full">
      <div className="border border-solid h-8 w-10/12 md:w-3/12 bg-gray-300 m-auto mt-10"></div>
      <div className="border border-solid h-8 w-8/12 md:w-2/12 bg-gray-300 m-auto my-10"></div>
      
      {/* Container for Shimmer Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default Shimmer;

