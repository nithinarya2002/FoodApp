import React from "react";
import Shimmer from "./Shimmer";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");
    console.log(props);
    this.state = {
      userInfo: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nithinarya2002");
    const json = await data.json();
    console.log("component Did Mount");
    console.log(json);
    this.setState(
      {
        userInfo: json,
      },
      () => {
        console.log("check", this.state.userInfo);
      }
    );
    console.log("exit");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("Unmount"); // used for garbage collection or removing unused variables
  }
  render() {
    if (this.state.userInfo === null) {
      return <Shimmer />;
    }
    const { login, id } = this.state.userInfo;
    console.log("object");
    return (
      <div className="user-card">
        <h2>Name:{login}</h2>
        <h2>id:{id}</h2>
        <h3>Connect me:@tonystark792</h3>
      </div>
    );
  }
}

export default UserClass;
