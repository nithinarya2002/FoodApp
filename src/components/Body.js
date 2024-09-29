import ResCard from "./ResCard";
import resList from "./utils/mockData";



const Body = () => {
    return (
      <div className="body">
        <div className="search-bar">Search bar</div>
        <div className="res-container">
          {resList.map((restinfo) => (
            <ResCard key={restinfo.info.id} resData={restinfo} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;