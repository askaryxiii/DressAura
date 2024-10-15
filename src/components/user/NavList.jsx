import DarkMode from "./DarkMode";
import { Link, useLocation } from "react-router-dom";
import { Badge, Typography, Button } from "@material-tailwind/react";
import { useAuth } from "../../context/Auth/AuthContext";
import ProfileMenu from "./ProfileMenu";
import { GiShoppingBag } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { useCart } from "../../context/cart/CartContext";

const NavList = () => {
  const { isAuthenticated } = useAuth();
  const { cartItems } = useCart();
  const location = useLocation();
  return (
    <ul className="mt-2 mb-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between w-full pl-4">
      {/* List Side */}
      <div className="flex  flex-col flex-1 justify-center lg:flex-row  gap-5 pb-1  ">
        <Typography
          as="li"
          variant="h2"
          color="blue-gray"
          className="p-1 text-xl hover:text-black">
          <Link
            to={"/"}
            className={`flex items-center hover:scale-105 ${
              location.pathname == "/" &&
              "text-black font-bold underline underline-offset-4"
            }`}>
            Home
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="h2"
          color="blue-gray"
          className="p-1  text-xl hover:text-black">
          <Link
            to={"/products"}
            className={`flex items-center hover:scale-105 ${
              location.pathname == "/products" &&
              "text-black font-bold underline underline-offset-4"
            }`}>
            Shop
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="h2"
          color="blue-gray"
          className="p-1  text-xl hover:text-black">
          <Link
            to={"/About"}
            className={`flex items-center hover:scale-105 ${
              location.pathname == "/About" &&
              "text-black font-bold underline underline-offset-4"
            }`}>
            About
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="h2"
          color="blue-gray"
          className="p-1  text-xl hover:text-black">
          <Link
            to={"/ContactUs"}
            className={`flex items-center hover:scale-105 ${
              location.pathname == "/ContactUs" &&
              "text-black font-bold underline underline-offset-4"
            }`}>
            Contact US
          </Link>
        </Typography>
      </div>
      {/* Icon Side */}
      <div className="flex flex-row justify-between">
        {/* login &profile icon */}
        {isAuthenticated ? (
          <ProfileMenu />
        ) : (
          <Link
            to={"/login"}
            className={`flex items-center  px-1 py-2 rounded hover:scale-110 transition-all `}>
            <BsFillPersonFill className="text-3xl " />
          </Link>
        )}
        {/* CArt */}
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1  text-xl mt-1">
          <Link
            to={"/cart"}
            className={`flex items-center  text-gray-900 px-4 py-1 rounded hover:scale-110 transition-all `}>
            <Badge
              color="blue-gray"
              content={cartItems?.length}
              className={cartItems?.length == 0 ? "hidden" : ""}>
              <GiShoppingBag className="text-3xl font-bold" />
            </Badge>
          </Link>
        </Typography>
        <DarkMode />
      </div>
    </ul>
  );
};

export default NavList;
