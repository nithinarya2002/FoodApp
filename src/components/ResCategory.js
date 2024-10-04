import { useState } from "react";
import CategoryList from "./CategoryList";
const ResCategory = ({ category, show, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div
      className="bg-gray-200 my-2 shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between py-4 pl-1">
        <p className="font-bold text-xl">
          {category.card.card.title} ({category?.card?.card?.itemCards?.length})
        </p>
        <span>🔽</span>
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
