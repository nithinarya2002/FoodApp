// import UserClass from "./UserClass";
import React, { useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // GitHub icon from FontAwesome
import { SiLeetcode, SiCodeforces } from "react-icons/si"; // LeetCode icon from Simple Icons

const About = () => {
  const { loggedInUserInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/nithinarya2002");
    const json = await data.json();
    setUserInfo(json);
    console.log(json);
  };

  return (
    <div className="flex items-center justify-center mt-16 ">
      <div className="bg-gray-100 h-[450px] w-96 flex flex-col items-center p-4 rounded-xl shadow-lg">
        <div className="w-32 h-32 m-auto my-4 ">
          <img
            className="w-full h-full object-cover rounded-full border border-solid bg-gray-600"
            src={loggedInUserInfo.avatar_url}
          />
        </div>
        <div className="m-2 text-xl italic font-bold">
          <p> {loggedInUserInfo.name}</p>
        </div>
        <div className="m-2 text-lg italic">
          <p> {"<React Developer/>"}</p>
        </div>
        <div className="m-2 text-lg italic">
          <p>{loggedInUserInfo.location}</p>
        </div>
        <div className="mx-auto text-lg italic px-[16px]">
          <p>❝ {loggedInUserInfo.bio}❞</p>
        </div>
        <div className="icon-links flex gap-6 py-4">
          {/* GitHub Icon */}
          <a
            href="https://github.com/nithinarya2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} color="#000" />
          </a>

          <a
            href="https://www.linkedin.com/in/nithin158/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} color="#0A66C2" />
          </a>

          {/* LeetCode Icon */}
          <a
            href="https://leetcode.com/code_eureka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode size={30} color="#FFA116" />
          </a>

          {/* Add more icons here */}
          <a
            href="https://codeforces.com/profile/nithinarya2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces size={30} color="#FFA116" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

// import UserContext from "../utils/UserContext";

// class About extends React.Component {
//   constructor() {
//     super();
//     console.log("Parent Constructor Called");
//   }
//   componentDidMount() {
//     console.log("Parent Component Did Mount");
//   }

//   render() {
//     console.log("Parent Render method called");
//     return (
//       <div>
//         <h1>About Us</h1>
//         <h2>Online Food Delivery App Partnered!</h2>

//           <UserContext.Consumer>
//             {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
//           </UserContext.Consumer>

//         <UserClass />
//       </div>
//     );
//   }
// }

// export default About;
