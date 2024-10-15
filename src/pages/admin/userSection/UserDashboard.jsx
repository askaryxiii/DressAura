import { Card, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../../context/Auth/AuthContext";
import ClockLoader from "react-spinners/ClockLoader";
import UserTable from "../../../components/admin/userDashboard/UserTable";

const TABLE_HEAD = ["First Name", "Role", "Operations"];

const UserDashboard = () => {
  const { getAllUsers, allUsersInfo, changeUserRole, deleteUserById, loading } =
    useAuth();

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-[90vh] flex items-center justify-center ">
          <ClockLoader color="#2d5335" size={70} />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-6 lg:px-10 px-2 py-10 flex-nowrap">
          <Typography variant="h2">Users</Typography>
          <Link className="w-fit" to={`/admin/users/add`}>
            <Button className="w-fit shadow-none hover:shadow-none bg-black rounded-sm">
              Add New User
            </Button>
          </Link>
          <UserTable />
        </div>
      )}
    </>
  );
};

export default UserDashboard;
