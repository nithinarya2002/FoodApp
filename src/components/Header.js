import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnvalue, setbtnvalue] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100">
      <div className="">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex items-center">
          <li className="px-2">
            Online Status:{onlineStatus === true?"✅":"🔴"}
          </li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="pxf-2">Cart</li>
          <button
            className="pr-5"
            onClick={() => {
              btnvalue === "Login"
                ? setbtnvalue("Logout")
                : setbtnvalue("Login");
            }}
          >
            {btnvalue}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
