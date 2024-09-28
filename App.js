import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className = "logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"/>
      </div>
      <div className="navitems">
        <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = ()=>{
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek"/>
            <h2>JanaPriya Restro</h2>
            <h4>Northern,Southern,Chinese</h4>
            <h4>Ratings 4.5</h4>
            <h4>45 minutes</h4>

        </div>
    )
}
const Body = ()=>{
    return (
        <div className="body">
            <div className="search-bar">Search bar</div>
            <div className="res-container">
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
