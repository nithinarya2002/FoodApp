import ResCard from "./ResCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();
  const [searchText, setsearchText] = useState("");
  const { loggedInUser, setName } = useContext(UserContext);


  useEffect(() => {
    fetchData();
  }, []);


    const fetchData = async () => {
      const data = await fetch(
       `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3850&lng=78.4867&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      // data.then((res)=>res.json()).then((json)=>console.log(json));
      const json = await data.json();
      console.log(json);
      // Optional Chaining
      setlistOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };


  if (onlineStatus === false)
    return (
      <h1>Looks like you are Offline! Please Check your internet connection</h1>
    );

  if (!listOfRestaurants || listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <div className="py-4 mt-8">
          <input
            type="text"
            className="border-2 border-solid border-gray-200 rounded-lg h-9 w-64"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="mx-2 bg-black text-white px-6 py-[4px] rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="bg-black text-white px-6 py-[8px]  rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (resinfo) => resinfo.info.avgRating > 4
              );
              setfilteredRestaurants(filteredRestaurants);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap w-11/12 mx-auto mt-8 border border-solid justify-evenly">
        {filteredRestaurants.map((restinfo, ind) => (
          <Link key={restinfo.info.id} to={"/restaurant/" + restinfo.info.id}>
            {/* {restinfo.info.isOpen === true ? (
              <OpenCard resData={restinfo} />
            ) : (
              <ResCard resData={restinfo} />
            )} */}
            <ResCard resData={restinfo} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
