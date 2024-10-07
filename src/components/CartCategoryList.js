import { CDN_URL } from "../utils/constants";
const CartCategoryList = ({itemCard}) => {
    console.log(itemCard);
    return (
      <div
        className="border border-b-gray-300 flex p-2 mt-4"
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
            <p>Qty - {itemCard?.quantity}</p>
          </div>
          <img
            src={CDN_URL + itemCard?.card?.info?.imageId}
            className="w-full h-[120px]"
          />
        </div>
      </div>
    );
  };

export default CartCategoryList;
