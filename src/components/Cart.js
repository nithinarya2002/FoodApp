import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import CartCategoryList from "./CartCategoryList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const tp = useSelector((store) => store.cart.price);
  return (
    <div className="w-10/12 ml-52 flex">
      <div className="w-8/12">
        <h1 className="text-center">Cart Data</h1>
        {cartItems.map((cartItem) => {
          return (
            <CartCategoryList
              key={cartItem?.cart?.info?.id}
              itemCard={cartItem}
            />
          );
        })}
      </div>
      <p className = "bg-black text-white h-10 ml-4 mt-6 p-2 px-4 rounded-lg">Cart Price :- ₹ {tp.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
