import { Typography } from "@material-tailwind/react";
import logo from "../../../src/image/exlogo.png";
import { Link } from "react-router-dom";

const LINKS = [
  {
    items: ["Home"],
    to: "/",
  },
  {
    items: ["Categories"],
    to: "/products",
  },
  {
    items: ["About us"],
    to: "/About",
  },
  {
    items: ["Contact"],
    to: "/ContactUS",
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full mb-0 flex text-center border-t-2 flex-col dark:bg-[#d2d2d2]">
      <div className="flex flex-wrap items-center py-4 justify-around">
        {/* Logo */}
        <div className="w-44 ml-10">
          <img className=" w-full object-cover object-center "
           src={logo} 
           />
        </div>

        {/* lists */}
        <div className="flex  justify-center mx-auto gap-7 md:mr-10">
          {LINKS?.map(({ items, to }, index) => (
            <ul key={index}>
              {items?.map((link, secIndex) => (
                <li key={secIndex}>
                  <Link
                    to={`${to}`}
                    color="gray"
                    className="font-medium text-md transition-colors hover:text-black">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div>
        {/* copyRight */}
        <div className="border-t-2">
          <Typography color="gray" className="text-center font-normal ">
            &copy; {currentYear} E-Commerce
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
