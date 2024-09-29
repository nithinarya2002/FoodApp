import ResCard from "./ResCard";
import resList from "./utils/mockData";



const Body = () => {

    let listOfRestaurants = [
    {
        info: {
        id: "150598",
        name: "Begam Bazar Dosa",
        cloudinaryImageId: "fm3rs3g6z7ibfhesmxnu",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
        avgRating: 3.5,
        sla: {
          deliveryTime: 73,
        }
      }
    },
    {
        info: {
        id: "150597",
        name: "Scoops Fast Food And Ice Cream",
        cloudinaryImageId: "fm3rs3g6z7ibfhesmxnu",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
        avgRating: 4,
        sla: {
          deliveryTime: 73,
        }
      }
    },
    {
        info: {
        id: "150599",
        name: "kadak Chai",
        cloudinaryImageId: "fm3rs3g6z7ibfhesmxnu",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
        avgRating: 4.5,
        sla: {
          deliveryTime: 73,
        }
      }
    }]

    return (
      <div className="body">
        <button className="filter-btn" onClick={()=>{
            listOfRestaurants = listOfRestaurants.filter((resinfo)=>resinfo.info.avgRating<4);
            console.log(listOfRestaurants);
        }}>Top rated Restaurants</button>
        <div className="res-container">
          {listOfRestaurants.map((restinfo) => (
            <ResCard key={restinfo.info.id} resData={restinfo} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;