import ShimmerCard from "./ShimmerCard";
const Shimmer = () => {
  return (
    <div>
      <div className="border border-solid h-8 w-3/12 bg-gray-300 m-auto mt-10"></div>
      <div className="border border-solid h-8 w-2/12 bg-gray-300 m-auto my-10"></div>
      <div className="flex flex-wrap  ml-[90px]">
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
