import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import useOnlineStatus from "../utils/useOnlineStatus";

const ResMenuCard = () => {
  const { resId } = useParams();

  const restInfo = useRestaurantInfo(resId);  // custom Hook helps in SRP(Single Responsibility Principle) and modularity.
  const onlineStatus = useOnlineStatus();
  
  if (onlineStatus === false) return <h1>Looks like you are Offline! Please Check your internet connection</h1>;
  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((itemCard) => (
          <li key={itemCard.card.info.id}>
            {itemCard.card.info.name}-Rs.
            {itemCard.card.info.price / 100 ||
              itemCard.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenuCard;
