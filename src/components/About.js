import React, { useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

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
    <div className="flex items-center justify-center mt-16 px-4">
      <div className="bg-gray-100 h-auto md:h-[450px] w-full md:w-96 flex flex-col items-center p-4 rounded-xl shadow-lg">
        <div className="w-24 h-24 md:w-32 md:h-32 m-auto my-4 ">
          <img
            className="w-full h-full object-cover rounded-full border border-solid bg-gray-600"
            src={loggedInUserInfo.avatar_url}
            alt="User Avatar"
          />
        </div>

        <div className="m-2 text-lg md:text-xl italic font-bold text-center">
          <p>{loggedInUserInfo.name}</p>
        </div>

        <div className="m-2 text-md md:text-lg italic text-center">
          <p>{"<React Developer/>"}</p>
        </div>

        <div className="m-2 text-md md:text-lg italic text-center">
          <p>{loggedInUserInfo.location}</p>
        </div>

        <div className="mx-auto text-sm md:text-lg italic text-center px-4">
          <p>❝ {loggedInUserInfo.bio} ❞</p>
        </div>

        <div className="icon-links flex gap-6 py-4">
          {/* GitHub Icon */}
          <a
            href="https://github.com/nithinarya2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="md:text-2xl" color="#000" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/nithin158/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="md:text-2xl" color="#0A66C2" />
          </a>

          {/* LeetCode Icon */}
          <a
            href="https://leetcode.com/code_eureka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode size={24} className="md:text-2xl" color="#FFA116" />
          </a>

          {/* Codeforces Icon */}
          <a
            href="https://codeforces.com/profile/nithinarya2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces size={24} className="md:text-2xl" color="#FFA116" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;


// // import UserContext from "../utils/UserContext";

// // class About extends React.Component {
// //   constructor() {
// //     super();
// //     console.log("Parent Constructor Called");
// //   }
// //   componentDidMount() {
// //     console.log("Parent Component Did Mount");
// //   }

// //   render() {
// //     console.log("Parent Render method called");
// //     return (
// //       <div>
// //         <h1>About Us</h1>
// //         <h2>Online Food Delivery App Partnered!</h2>

// //           <UserContext.Consumer>
// //             {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
// //           </UserContext.Consumer>

// //         <UserClass />
// //       </div>
// //     );
// //   }
// // }

// // export default About;
