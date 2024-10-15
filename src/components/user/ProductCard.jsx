import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";
// rating styles

const ProductCard = ({ _id, title, price, image }) => {
  return (
    <Link to={`/products/${_id}`}>
      <div className="flex flex-col  shadow-sm bg-white dark:bg-gray-400 border-none dark:border-gray-800 min-w-60 hover:scale-105  transition duration-700 ease-in-out gap-6 py-3 justify-between items-center pt-5">
        <div className="flex flex-col gap-4 w-full items-center">
          <img
            src={image}
            loading="lazy"
            className="max-w-48 h-72 rounded object-contain"
          />
          <div className="flex flex-col px-3 gap-1 w-full">
            <span className="text-md ">{title?.slice(0, 20)}</span>
            <span className="text-md font-medium">${price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
