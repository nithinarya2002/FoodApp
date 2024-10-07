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
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  // console.log("header rendered again");
  // const obj = { name: "nithin", dept: "cse" };
  // const obj1 = { ...obj, rno: 158 };
  // console.log(obj1);
  // console.log(loggedInUser);
  return (
    <div>
      <div className="flex justify-between bg-gray-50 m-auto shadow-lg w-10/12">
        <div className="w-24 h-24">
          <img className="w-full h-full rounded-full object-cover" src={LOGO_URL} />
        </div>
        <div className="flex pr-8">
          <ul className="flex items-center">
            {/* <li className="px-2">
            Online Status:{onlineStatus === true ? "✅" : "🔴"}
          </li> */}
            <li className="hover:text-gray-300 p-4">
              <Link to="/" className="flex flex-col items-center">
                <FaHome size={24} />
                <span>Home</span>
              </Link>
            </li>
            <li className="hover:text-gray-300 p-4">
              <Link to="/about" className="flex flex-col items-center">
                <FaInfoCircle size={24} />
                <span>About Us</span>
              </Link>
            </li>

            <li className="hover:text-gray-300 p-4">
              <Link to="/contact" className="flex flex-col items-center">
                <FaPhone size={24} />
                <span>Contact</span>
              </Link>
            </li>

            {/* <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li> */}
            <li className="hover:text-gray-300 p-4">
              <Link to="/cart" className="flex flex-col items-center">
                <FaShoppingCart size={24} />
                <span>Cart-{cartItems.length}</span>
              </Link>
            </li>
            <button
              
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
    </div>
  );
};

export default Header;
