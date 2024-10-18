import { Typography, Button } from "@material-tailwind/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImage from "../../../image/hero_img.png";

const HomeSlide1 = () => {
  return (
    <section className=" mb-10  flex flex-row-reverse lg:h-fit md:h-[50vh] h-[60vh] border-2 lg:w-4/5 lg:mx-auto mx-3 mt-8 ">
      <div className=" inset-0  z-10 w-1/2">
        <img
          src={heroImage}
          alt="hero"
          className="w-full h-full lg:max-h-[510px] object-cover m-auto "
        />
      </div>
      <div className="flex flex-col gap-4 justify-center mx-auto ">
        <Typography variant="h5" className="mb-2 text-sm uppercase md:text-xl">
          Our Best Seller
        </Typography>
        <Typography
          variant="h2"
          className="mb-2 text-blue-gray-900 text-md md:text-4xl dark:text-gray-400">
          Latest Arrivals
        </Typography>
        <Link
          to={"/products"}
          className="flex text-sm font-semibold  xl:gap-2 xl:text-md items-center ">
          Shop Now <FaLongArrowAltRight className="ml-0" />
        </Link>
      </div>
    </section>
  );
};

export default HomeSlide1;
