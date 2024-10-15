import { Button, Input, Typography } from "@material-tailwind/react";
import { useCart } from "../../context/cart/CartContext";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth/AuthContext";

const Checkout = ({ btnDisabled }) => {
  const { cartItems, totalAmount } = useCart();
  const { isAuthenticated } = useAuth();
  return (
    <div className="bg-[#dddddd] dark:bg-[#515151] dark:shadow-lg flex flex-col h-full md:gap-8 p-6 min-w-80 ">
      <div className="flex flex-col gap-3">
        <span className="text-2xl font-semibold">Summary</span>
        <hr className="border-gray-500" />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between ">
          <span className="text-md font-normal uppercase">Total Items</span>
          <span className="text-md font-normal">${totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-md font-normal uppercase">Shipping</span>
          <span className="text-md font-normal">
            ${(totalAmount * 0.1).toFixed(2)}
          </span>
        </div>
        <div className="flex lg:flex-col md:flex-row flex-col gap-2 text-nowrap items-center">
          <span className="text-md font-normal uppercase w-full">
            Promo Code
          </span>
          <div className="relative">
            <input
              type="text"
              id="hs-trailing-icon"
              name="hs-trailing-icon"
              className="py-2 px-4 pe-40 block w-full border-gray-200 shadow-sm rounded-none text-sm focus:z-10 focus-visible:border-none focus-visible:outline-none focus-visible:ring-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 placeholder-gray-500 dark:placeholder-gray-500 dark:focus:ring-neutral-600"
              placeholder="XGY90"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
              <svg
                className="w-6 h-6 text-gray-500 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-4 gap-3">
          <hr className="border-gray-500" />
          <div className="flex justify-between">
            <span className="text-md uppercase">Total price</span>
            <span className="text-md font-normal">
              ${(totalAmount * 1.1).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className={btnDisabled && "hidden"}>
        <Link to={`${isAuthenticated ? "/checkout" : "/login"} `}>
          <Button
            variant="filled"
            className="text-sm text-center bg-black py-2 hover:shadow-none shadow-none rounded-none items-center w-full"
            disabled={cartItems?.length == 0}>
            CheckOut
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
