import { Typography } from "@material-tailwind/react";
import logo from "../../../public/img/logo(2).png";
import { Link } from "react-router-dom";

const LINKS = [
  {
    items: ["Home"],
    to:"/"
  },
  {
    items: ["Categories"],
    to:"/products"
  },
  {
    items: ["About us"],
   to:"/About"
  },
  {
    items: ["Contact Us"],
    to:"/ContactUS"
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relatve w-full mb-0 px-4 flex text-center border-t-2 flex-col">
      <div className="flex flex-wrap items-center  md:justify-around py-4">
        {/* Logo */}
        <div className="w-56 mx-auto">
          <img
            className=" w-full object-cover object-center "
            src={logo}
          />
        </div>

        {/* lists */}
        <div className="flex  justify-between gap-16 mx-auto ">
          {LINKS.map(({items,to }) => (
            <ul >
              {items.map((link) => (
                <li>
                  <Link
                    to={`${to}`}
                    color="gray"
                    className="font-medium text-md transition-colors hover:text-black"
                  >
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
          &copy; {currentYear}{" "} E-Commerce
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
