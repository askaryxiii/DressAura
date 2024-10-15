import { Button, Spinner, Typography } from "@material-tailwind/react";
import { useCart } from "../../context/cart/CartContext";
import { MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const FullCart = ({ productId, title, image, price, quantity, stock }) => {
  const { updateItemsInCart, deleteItemInCart, cartLoading } = useCart();
  const handleQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    updateItemsInCart({ productId, quantity: newQuantity });
  };
  const removeItemHandler = (productId) => {
    deleteItemInCart(productId);
  };
  const isLoading = cartLoading[productId] || {};

  return (
    <div className="flex justify-between items-center py-3 mt-0 border-t">
      <div className="flex  items-center flex-grow">
        <img src={image} className=" w-20 h-24 object-contain" />

        <div className="flex flex-col ml-4">
          <span className="text-md font-medium w-auto">
            {title?.slice(0, 30)}
          </span>
          <span className="text-xs font-light text-gray-400">
            items left : {stock - quantity}
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="pr-8 flex gap-4 justify-center items-center">
          <Button
            size="sm"
            disabled={quantity == 1 || isLoading.update}
            onClick={() => handleQuantity(productId, quantity - 1)}
            className="font-medium text-base shadow-none hover:shadow-none bg-transparent text-black ">
            {isLoading.update ? <Spinner className="h-4 w-4" /> : "-"}
          </Button>
          <span className="text-lg font-semibold px-3 border-r-2 border-l-2 border-gray-400">
            {quantity}
          </span>
          <Button
            size="sm"
            onClick={() => handleQuantity(productId, quantity + 1)}
            disabled={quantity >= stock || isLoading.update}
            className="text-base font-medium shadow-none hover:shadow-none bg-transparent text-black">
            {isLoading.update ? <Spinner className="h-4 w-4" /> : "+"}
          </Button>
        </div>

        <div className="pr-8">
          <span className="text-base font-medium">$ {price}</span>
        </div>
        <div>
          <i className="fa fa-close text-xs font-medium"></i>
        </div>
      </div>
      <Button
        className="bg-transparent text-black shadow-none border-none hover:shadow-none "
        onClick={() => removeItemHandler(productId)}
        disabled={isLoading.delete}>
        {isLoading.delete ? (
          <Spinner />
        ) : (
          <IoClose className="text-xl text-gray-700" />
        )}
      </Button>
    </div>
  );
};

export default FullCart;

// return (
//   <div className="flex flex-col gap-2 md:gap-8 md:m-4">
//     {/* img && title && price */}
//     <div className="flex justify-evenly items-center">
//       <img
//         src={image}
//         className="max-w-12 max-h-12 md:max-w-28 md:max-h-28 rounded"
//         alt={title}
//       />
//       <Typography
//         variant="h5"
//         className=" text-sm md:text-md uppercase text-gray-600 dark:text-gray-300"
//       >
//         {title?.slice(0, 30)}
//       </Typography>
//       <Typography
//         variant="h5"
//         className="text-md sm:text-lg md:text-2xl uppercase text-gray-600 dark:text-gray-300"
//       >
//         {price} $
//       </Typography>
//     </div>
//     {/* quantity operations amount */}
//     <div className="flex justify-evenly items-center">
//       <Button
//         color="red"
//         disabled={quantity == 1 || isLoading.update}
//         onClick={() => handleQuantity(productId, quantity - 1)}
//         className="w-20 md:w-32 flex justify-center items-center"
//       >
//         {isLoading.update ? <Spinner className="h-4 w-4" /> : "Decrease"}
//       </Button>
//       <Typography
//         variant="h5"
//         className="text-lg md:text-2xl uppercase text-gray-600 dark:text-gray-300 "
//       >
//         {quantity}
//       </Typography>
//       <Button
//         color="green"
//         onClick={() => handleQuantity(productId, quantity + 1)}
//         disabled={quantity >= stock || isLoading.update}
//         className="w-20 md:w-32 flex justify-center items-center"
//       >
//         {isLoading.update ? <Spinner className="h-4 w-4" /> : "Increase"}
//       </Button>
//       <Typography
//         variant="h5"
//         className="text-lg md:text-2xl uppercase text-gray-600 dark:text-gray-300"
//       >
//         {(price * quantity).toFixed(2)} $
//       </Typography>
//       <Typography
//         variant="h5"
//         color="gray"
//         className="hidden md:flex items-center text-red-400"
//       >
//         <span className="text-sm text-gray-500">items left :</span>
//         {stock - quantity}
//       </Typography>
//       <Button
//         className="bg-transparent text-black shadow-none border-none hover:shadow-none "
//         onClick={() => removeItemHandler(productId)}
//         disabled={isLoading.delete}
//       >
//         {isLoading.delete ? <Spinner /> : <MdDelete className="text-3xl" />}
//       </Button>
//     </div>
//     <div className="h-1 bg-gray-300 rounded"></div>
//   </div>
// );
