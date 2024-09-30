import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData?.info;
  const deliveryTime = resData.info.sla.deliveryTime;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>Delivery Time {deliveryTime}mins</h4>
    </div>
  );
};

export default ResCard;
