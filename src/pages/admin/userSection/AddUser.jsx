/* eslint-disable no-useless-escape */

import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
  Spinner,
} from "@material-tailwind/react";
import { useAuth } from "../../../context/Auth/AuthContext";
import HelperText from "../../../components/user/HelperText";
const AddUser = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    gender: "male",
    phone: "",
  });
  const { registerUser, errorMsg, setErrorMsg, loading } = useAuth();
  const [err, setErr] = useState({});
  const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // update image info
  useEffect(() => {
    setNewUser((prevUserInfo) => ({
      ...prevUserInfo,
      image:
        prevUserInfo.gender === "male"
          ? "https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg?w=360"
          : "https://media.istockphoto.com/id/1081125770/vector/face-expression-of-woman-with-blond-hair.jpg?s=612x612&w=0&k=20&c=mN-oV1RNH964Hu8s8Qjie8tOf6Awyf6e-sYUjR_RnOk=",
    }));
  }, [newUser?.gender]);
  const submitHandler = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setErr({});
    if (newUser?.firstName?.length < 3) {
      setErr((prevErr) => ({ ...prevErr, errName: true }));
    } else if (newUser?.lastName?.length < 3) {
      setErr((prevErr) => ({ ...prevErr, errLastName: true }));
    } else if (!regexp.test(newUser.email)) {
      setErr((prevErr) => ({ ...prevErr, errEmail: true }));
    } else if (newUser?.password?.length < 6) {
      setErr((prevErr) => ({ ...prevErr, errPassword: true }));
    } else {
      registerUser(newUser, "/admin/users");
    }
  };
  return (
    <div className="flex flex-col gap-6 w-1/2 min-h-[90vh] py-10 px-16 ">
      <Typography variant="h4">Edit Product</Typography>
      <form onSubmit={submitHandler} className="flex flex-col gap-2">
        <div className="flex flex-col gap-4">
          <span>User Image</span>
          <Input
            disabled
            className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={newUser?.image || ""}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, image: e.target.value }))
            }
            color="green"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>First Name</span>
          <Input
            size="md"
            value={newUser?.firstName || ""}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, firstName: e.target.value }))
            }
            className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            error={err?.errName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>Last Name</span>
          <Input
            size="md"
            value={newUser?.lastName || ""}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, lastName: e.target.value }))
            }
            error={err?.errLastName}
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
            value={newUser?.email || ""}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, email: e.target.value }))
            }
            error={err?.errEmail}
            className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>UserPassword</span>
          <Input
            size="md"
            value={newUser?.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            error={err?.errPassword}
            type="password"
            className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <HelperText text="password must be more than 5 characters" />
        </div>
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span>User Gender</span>
            <Select
              // label='Select Gender'
              value={newUser?.gender || ""}
              onChange={(val) =>
                setNewUser({
                  ...newUser,
                  gender: val,
                })
              }>
              <Option selected value="male">
                Male
              </Option>
              <Option value="female">Female</Option>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <span>User Phone</span>
            <Input
              size="md"
              value={newUser?.phone || ""}
              onChange={(e) =>
                setNewUser((prev) => ({ ...prev, phone: e.target.value }))
              }
              className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>

        <Button
          size="md"
          type="submit"
          className="text-xs w-fit bg-black rounded-sm"
          disabled={loading}>
          {loading ? <Spinner color="amber" /> : "Add User"}
        </Button>
      </form>
    </div>
  );
};

export default AddUser; 
