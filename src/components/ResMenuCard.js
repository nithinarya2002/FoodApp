import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResCategory from "./ResCategory";
import {useState} from 'react';

const ResMenuCard = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const restInfo = useRestaurantInfo(resId); // custom Hook helps in SRP(Single Responsibility Principle) and modularity.
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are Offline! Please Check your internet connection</h1>
    );
  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info;

  // const itemCards =
  //   restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //     ?.itemCards;
  // console.log(itemCards);

  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log(categories);

  return (
    <div className="w-6/12 m-auto">
      <div className="text-center font-bold text-2xl">
        <h1 className="">{name}</h1>
        <p>
          {cuisines.join(", ")} <span>{costForTwoMessage}</span>
        </p>
      </div>
      <div className=" ">
        {categories.map((category, index) => (
          <ResCategory
            key={category?.card?.card?.title}
            category={category}
            show={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenuCard;