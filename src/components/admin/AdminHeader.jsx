import { Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import DarkMode from "../user/DarkMode";
const AdminHeader = () => {
  return (
    <Navbar className="sticky top-0 z-50  max-w-full rounded-none  py-1 lg:px-8  border-none">
      <div className="flex justify-between items-center mx-14">
        {/* logo */}
        <Typography
          as="a"
          href="/"
          className="cursor-pointer py-1.5 font-medium">
          <img src="/img/logo.png" />
        </Typography>

        <Typography
          as="li"
          variant="h2"
          color="white"
          className="text-xl font-bold text-gray-800 transition-all">
          <div className="flex gap-4">
            <Link to={"/"} className="flex items-center">
              Home
            </Link>

            <DarkMode />
          </div>
        </Typography>
      </div>
    </Navbar>
  );
};

export default AdminHeader;
