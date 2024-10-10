import { useState } from "react";
import CategoryList from "./CategoryList";

const ResCategory = ({ category}) => {

  const [show,setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      className="bg-gray-200 my-2 shadow-lg cursor-pointer rounded-md"
      
    >
      <div className="flex justify-between items-center py-4 px-2" onClick={handleClick}>
        <p className="font-bold text-lg sm:text-xl">
          {category.card.card.title} ({category?.card?.card?.itemCards?.length})
        </p>
        <span className="text-xl">{show ? "🔼" : "🔽"}</span>
      </div>
      {show && (
        <CategoryList
          itemCards={category.card.card.itemCards}
        />
      )}
    </div>
  );
};

export default ResCategory;

