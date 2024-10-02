import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnvalue, setbtnvalue] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navitems">
        <ul>
          <li>
            Online Status:{onlineStatus === true?"✅":"🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
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
