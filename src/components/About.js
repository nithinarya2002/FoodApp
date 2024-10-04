import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor Called");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render method called");
    return (
      <div>
        <h1>About Us</h1>
        <h2>Online Food Delivery App Partnered!</h2>
        
          <UserContext.Consumer>
            {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
          </UserContext.Consumer>
        
        <UserClass />
      </div>
    );
  }
}

export default About;
