import {
  Card,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  Input,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { useAuth } from "../../../context/Auth/AuthContext";
import { Link, useParams } from "react-router-dom";
import { CardSkeleton } from "../../../components/admin/CardSkeleton";
const ShowUser = () => {
  const { getUserById, userById, loading } = useAuth();
  const { userId } = useParams();
  const { image, firstName, lastName, email, gender, city, phone, role } =
    userById;

  useEffect(() => {
    getUserById(userId);
  }, [userId]);
  return (
    <div className="pb-1">
      {loading ? (
        <div className="h-[90vh] flex justify-center items-center">
          <CardSkeleton />
        </div>
      ) : (
        <div className="flex flex-col gap-6 w-1/2 h-[90vh] py-10 px-16 ">
          <div className="flex flex-col gap-4">
            <span>User Image</span>
            <img
              src={image || "https://placehold.co/600x400?text=user image"}
              className="w-32 h-32 object-contain shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>User Name</span>
            <Input
              size="md"
              disabled
              value={`${firstName?.slice(0, 10) || ""} ${
                lastName?.slice(0, 10) || ""
              }`}
              className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>User E-Mail</span>
            <Input
              size="md"
              disabled
              value={email || "NA"}
              className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span>User Gender</span>
              <Input
                size="md"
                disabled
                value={gender || "NA"}
                className=" !border-t-blue-gray-200 rounded-sm w-full focus:!border-gray-700"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span>User City</span>
              <Input
                size="md"
                disabled
                value={city || "NA"}
                className=" !border-t-blue-gray-200 rounded-sm w-full focus:!border-gray-700"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span>User Phone</span>
              <Input
                size="md"
                disabled
                value={phone || "NA"}
                className=" !border-t-blue-gray-200 rounded-sm w-full focus:!border-gray-700"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span>User Role</span>
              <Input
                size="md"
                disabled
                value={role || "NA"}
                className=" !border-t-blue-gray-200 rounded-sm w-full focus:!border-gray-700"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <Link to={`/admin/users/edit/${userId}`}>
            <Button size="md" className="text-xs bg-black rounded-sm">
              Edit User
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShowUser;
