import { Typography, Button } from "@material-tailwind/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSlide1 = () => {
  return (
    <div className="h-screen relative flex w-full ">
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-gray-50   z-10 "></div>
      <div className="relative max-w-screen-sm flex flex-col justify-center  pl-12 gap-4 items-start z-20">
        <Typography
          variant="h5"
          className="mb-2 text-md md:text-4xl text-[#530307]  uppercase"
        >
          All collection
        </Typography>
        <Typography
          variant="h2"
          className="mb-2 text-blue-gray-900 text-xl md:text-4xl dark:text-gray-400"
        >
          summer- Fall - Winter Collection 2024
        </Typography>
        <Typography
          variant="h5"
          className="mb-2 text-gray-600 text-md md:text-lg dark:text-gray-400  text-wrap"
        >
          A Specialist Label creating luxury essentials.Ethically crafted with
          an unwavering commitment to exceptional quality.
        </Typography>
        <Link to={"/products"} className="mt-4">
          <Button
            variant="gradient"
            className="flex text-sm  xl:gap-4 xl:text-md items-center text-center "
          >
            Shop Now <FaLongArrowAltRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeSlide1;
