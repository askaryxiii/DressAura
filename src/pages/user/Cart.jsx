import { Typography, Button, Spinner } from "@material-tailwind/react";
import { useCart } from "../../context/cart/CartContext";
import EmptyCart from "../../components/user/EmptyCart";
import FullCart from "../../components/user/FullCart";
import { MdDelete } from "react-icons/md";
import ClockLoader from "react-spinners/ClockLoader";
import { IoClose } from "react-icons/io5";
import Checkout from "../../components/user/Checkout";
import { CgArrowLongLeft } from "react-icons/cg";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    totalAmount,
    clearCartHandler,
    clearCartLoading,
    cartPageLoading,
  } = useCart();
  return (
    <div className="min-h-screen ">
      {cartPageLoading ? (
        <div className="h-[80vh] flex items-center justify-center">
          <ClockLoader color="#1f3f28" size={60} />
        </div>
      ) : cartItems?.length == 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col min-h-fit dark:bg-[#515151] lg:flex-row justify-evenly rounded-md shadow-2xl items-center md:items-start md:gap-10 gap-5 md:m-10 lg:pb-0 md:pb-0 pb-5 ">
          {/* // cart items */}
          <div className="w-full h-full flex flex-col justify-evenly gap-1 py-4 px-5">
            {/* clear cart items  */}
            <div className="flex justify-between pt-4 pb-8 items-center">
              <span className="text-3xl font-medium">Shopping Cart</span>
              <span> {cartItems.length} Items</span>
            </div>
            {cartItems?.map(
              ({ productId, title, quantity, image, price, stock }, index) => (
                <div key={index}>
                  <FullCart
                    productId={productId}
                    price={price}
                    title={title}
                    quantity={quantity}
                    image={image}
                    stock={stock}
                  />
                </div>
              )
            )}
            <hr className="lg:mb-20" />
            <div className="flex justify-between">
              <Link
                to={"/products"}
                className="flex text-sm text-gray-800 p-0 items-center mt-3 gap-2">
                <CgArrowLongLeft className="text-xl" />
                <span>Back to Shop</span>
              </Link>
              <Link
                className="text-sm text-gray-800 p-0 items-center mt-3 "
                onClick={() => {
                  clearCartHandler();
                }}
                disabled={clearCartLoading}>
                {clearCartLoading ? (
                  <Spinner />
                ) : (
                  <div className="flex items-center gap-2">
                    <IoClose className="text-xl" />
                    <span>Remove All</span>
                  </div>
                )}
              </Link>
            </div>
          </div>
          {/* checkout */}
          <div className=" h-full lg:w-1/3 md:w-full">
            <Checkout />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
