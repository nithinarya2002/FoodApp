import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <div className="w-8/12 m-auto  flex flex-col items-center justify-center mt-10">
      <h1 className="text-lg font-semibold">
        Stomach and Cart should never be empty...😉👇
      </h1>
      <Link to="/" className="mt-10 bg-black text-white px-4 py-2 rounded-lg">
        Browse Restaurants
      </Link>
    </div>
  );
};

export default EmptyCart;
