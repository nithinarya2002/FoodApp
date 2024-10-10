import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FaHome, FaInfoCircle, FaPhone, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [btnvalue, setbtnvalue] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-gray-50 shadow-lg">
      {/* Flex container for responsiveness */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center flex-wrap m-auto w-full md:w-10/12 p-4">
        {/* Logo: Center on small screens, left-align on larger screens */}
        <div className="w-full md:w-auto flex justify-center mb-4 md:mb-0">
          <img className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover" src={LOGO_URL} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-end items-center w-full md:w-auto space-x-4 md:space-x-6">
          <li className="hover:text-gray-300 p-2 md:p-4">
            <Link to="/" className="flex flex-col items-center text-xs md:text-base">
              <FaHome size={20} className="md:text-2xl" />
              <span>Home</span>
            </Link>
          </li>

          <li className="hover:text-gray-300 p-2 md:p-4">
            <Link to="/about" className="flex flex-col items-center text-xs md:text-base">
              <FaInfoCircle size={20} className="md:text-2xl" />
              <span>About Us</span>
            </Link>
          </li>

          <li className="hover:text-gray-300 p-2 md:p-4">
            <Link to="/contact" className="flex flex-col items-center text-xs md:text-base">
              <FaPhone size={20} className="md:text-2xl" />
              <span>Contact</span>
            </Link>
          </li>

          <li className="hover:text-gray-300 p-2 md:p-4">
            <Link to="/cart" className="flex flex-col items-center text-xs md:text-base">
              <FaShoppingCart size={20} className="md:text-2xl" />
              <span>Cart-{cartItems.length}</span>
            </Link>
          </li>

          {/* Login Button */}
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-base"
            onClick={() => {
              setbtnvalue(btnvalue === "Login" ? "Logout" : "Login");
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

