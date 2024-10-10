import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResCategory from "./ResCategory";
import { useState } from 'react';
import ShimmerMenuContainer from "./ShimmerMenuContainer";

const ResMenuCard = () => {
  const { resId } = useParams();
  // const [showIndex, setShowIndex] = useState(null);
  const restInfo = useRestaurantInfo(resId); // custom Hook for modularity
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-xl mt-4">Looks like you are Offline! Please check your internet connection.</h1>
    );
  if (restInfo === null) return <ShimmerMenuContainer />;

  const { name, cuisines, costForTwoMessage } = restInfo?.cards[2]?.card?.card?.info;

  const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (category) => {
      return (
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    }
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center font-bold text-2xl sm:text-3xl md:text-4xl my-4">
        <h1>{name}</h1>
        <p className="text-lg sm:text-xl md:text-2xl">
          {cuisines.join(", ")} <span>{costForTwoMessage}</span>
        </p>
      </div>
      <div>
        {categories.map((category, index) => (
          <ResCategory
            key={category?.card?.card?.title}
            category={category}
            // show={index === showIndex}
            // setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenuCard;
