import ResCard from "./ResCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResCardOpen from "./ResCardOpen";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();
  const [searchText, setsearchText] = useState("");
  const {loggedInUser,setName}= useContext(UserContext);
  

  const OpenCard = ResCardOpen(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // data.then((res)=>res.json()).then((json)=>console.log(json));
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (onlineStatus === false)
    return (
      <h1>Looks like you are Offline! Please Check your internet connection</h1>
    );
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex items-center">
        <div className="py-4">
          <input
            type="text"
            className="border-2 border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="mx-2 bg-green-300 px-2 py-[2px] rounded-sm"
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
            className="bg-yellow-200 px-4 py-1  rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (resinfo) => resinfo.info.avgRating > 4.5
              );
              setfilteredRestaurants(filteredRestaurants);
            }}
          >
            Top rated Restaurants
          </button>
          <label className="mx-2">ChangeUserName: </label>
          <input
            type="text"
            className="border-2 border-solid border-black"
            value={loggedInUser}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restinfo, ind) => (
          <Link key={restinfo.info.id} to={"/restaurant/" + restinfo.info.id}>
            {restinfo.info.isOpen === true ? (
              <OpenCard resData={restinfo} />
            ) : (
              <ResCard resData={restinfo} />
            )}
            {/* <ResCard resData={restinfo} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
