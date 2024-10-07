import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import MyImage from "../images/star.jpeg";
import clock from "../images/clock.png";

const ResCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData?.info;
  const deliveryTime = resData.info.sla.deliveryTime;

  return (
    <div className="w-[300px] bg-gray-200 m-[22px] rounded-lg hover:bg-gray-300 h-96  pt-4 ">
      <div className="w-60 h-40 m-auto">
        <img
          className="rounded-xl w-full h-full object-cover"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="p-4">
        <div className="">
          <h2 className="font-bold py-2 text-[17px]">{name}</h2>
        </div>
        <div className="h-[68px]">
          <h4>{cuisines.join(", ")}</h4>
        </div>
        <div className="flex justify-between">
          <div className="flex bg-white px-3 py-1 rounded-lg">
            <h4>{avgRating}</h4>
            <img className="w-5 h-5 pt-[1px]" src={MyImage} />
          </div>
          <div className="flex bg-white px-3 py-1 rounded-lg">
            <img className="w-5 h-5" src={clock} />
            <h4>{deliveryTime}mins</h4>
          </div>
          <div className = " bg-white rounded-lg px-1">
            <h4>{costForTwo}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
