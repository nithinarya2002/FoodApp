import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CategoryList = ({ itemCards }) => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  
  const handleAddClick = (data) => {
    // dispatch(addItem(data));
    const arr = cartItems.filter((val) => {
      console.log("ch", val?.card?.info?.id, data?.card?.info?.id);
      return val?.card?.info?.id === data?.card?.info?.id;
    });
    console.log("arr", arr);
    if (arr.length === 0) {
      newdata = { ...data, quantity: 1 };
      console.log(newdata);
      dispatch(addItem(newdata));
    } else {
      // console.log("bf",arr[0].quantity);
      dispatch(removeItem(arr[0]));
      obj = arr[0];
      // console.log("obj",obj);
      const cnt = obj.quantity;
      obj = { ...obj, quantity: cnt + 1 };
      // console.log("af",obj.quantity);
      dispatch(addItem(obj));
    }
  };

  return (
    <div className="p-4">
      {itemCards.map((itemCard) => (
        <div
          key={itemCard?.card?.info?.id}
          className="border border-b-gray-300 flex p-2"
        >
          <div className="w-10/12">
            <p className="p-2 font-bold text-[15px]">
              {itemCard?.card?.info?.name} - ₹{""}
              <span>
                {itemCard?.card?.info?.price
                  ? itemCard?.card?.info?.price / 100
                  : itemCard?.card?.info?.defaultPrice / 100}
              </span>
            </p>
            <p className="pl-2 pb-2 text-sm">
              {itemCard?.card?.info?.description}
            </p>
          </div>

          <div className="w-2/12 ">
            <div className="absolute ml-1 bg-black text-white rounded-lg px-2">
              <button onClick={() => handleAddClick(itemCard)}>Add +</button>
            </div>
            <img
              src={CDN_URL + itemCard?.card?.info?.imageId}
              className="w-full h-[120px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
