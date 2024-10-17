import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";
// rating styles

const ProductCard = ({ _id, title, price, image }) => {
  return (
    <Link to={`/products/${_id}`}>
      <div className="flex flex-col shadow-md bg-white dark:bg-gray-300 dark:text-black max-w-96 rounded-lg dark:border-gray-800 hover:scale-105 justify-around text-center transition duration-700 ease-in-out gap-5  py-3 px-5">
        <div className="flex flex-col gap-4 w-full items-center max-h-96">
          <img
            src={image}
            loading="lazy"
            className="w-3/4 h-72 rounded object-contain "
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
