import { Link, useLocation } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";

const AdminSideBar = () => {
  const location = useLocation();
  return (
    <div>
      <div className="sm:static md:static lg:fixed sm:flex md:flex md:flex-col lg:block top-18 z-10 h-full text-center border-r-2 text-gray-900 font-bold w-full lg:w-1/6 ">
        <ul className="flex flex-col h-full gap-5 items-start py-4 pl-4">
          <li className={`transition-all uppercase text-2xl pb-5`}>
            DashBoard
          </li>
          <li className={`transition-all w-full flex flex-col gap-2 `}>
            <span className="text-xl flex justify-start">Products</span>
            <div className="flex justify-end w-full">
              <Link
                to={"/admin/products"}
                className="flex items-center capitalize gap-2 border-t-2 border-b-2 border-l-2 px-5 py-1.5 w-5/6">
                <FaRegListAlt className="w-6 h-6" />
                <span>List Items</span>
              </Link>
            </div>
            <div className="flex justify-end w-full">
              <Link
                to={"/admin/products/add"}
                className="flex items-center capitalize gap-2 border-t-2 border-b-2 border-l-2 px-5 py-1.5 w-5/6">
                <IoAddCircleOutline className="w-6 h-6" />
                <span>Add Item</span>
              </Link>
            </div>
          </li>
          <li className={`transition-all w-full flex flex-col gap-2 `}>
            <span className="text-xl flex justify-start">Users</span>
            <div className="flex justify-end w-full">
              <Link
                to={"/admin/users"}
                className="flex items-center capitalize gap-2 border-t-2 border-b-2 border-l-2 px-5 py-1.5 w-5/6">
                <FaRegListAlt className="w-6 h-6" />
                <span>List Users</span>
              </Link>
            </div>
            <div className="flex justify-end w-full">
              <Link
                to={"/admin/users/add"}
                className="flex items-center capitalize gap-2 border-t-2 border-b-2 border-l-2 px-5 py-1.5 w-5/6">
                <IoAddCircleOutline className="w-6 h-6" />
                <span>Add Users</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar;
