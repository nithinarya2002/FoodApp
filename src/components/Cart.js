import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import CartCategoryList from "./CartCategoryList";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const tp = useSelector((store) => store.cart.price);

  return (
    <div className="w-full md:w-10/12 ml-auto md:ml-52 flex flex-col md:flex-row">
      <div className="w-full md:w-8/12">
        <h1 className="text-center mt-4 text-xl md:text-2xl font-bold">Cart Data</h1>
        {cartItems.length !== 0 ? (
          cartItems.map((cartItem) => {
            return (
              <CartCategoryList
                key={cartItem?.cart?.info?.id}
                itemCard={cartItem}
              />
            );
          })
        ) : (
          <EmptyCart />
        )}
      </div>

      <div className="w-full md:w-auto flex justify-center items-center">
        <p className="bg-black text-white h-10 ml-0 md:ml-4 mt-6 p-2 px-4 rounded-lg">
          Cart Price: ₹ {tp.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;

