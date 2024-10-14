import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const EmptyCart = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="md:w-1/3 flex flex-col justify-center items-center gap-3">
        <FiShoppingBag className="w-14 h-14" />
        <span className="text-xl font-medium">Your Cart is empty</span>
        <span className="text-base font-light text-center">
          Add products while you shop, so they'll be ready for checkout later.
        </span>
        <Link to={"/products"}>
          <Button
            variant="filled"
            className="flex md:gap-4 text-sm items-center justify-center shadow-none hover:shadow-none"
          >
            Shop Now
            <CiShoppingCart className="text-xl font-bold" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
