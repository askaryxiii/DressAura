import { Button, Input, Typography } from "@material-tailwind/react";
import { useAuth } from "../../context/Auth/AuthContext";
import Checkout from "../../components/user/Checkout";

const CheckOut = () => {
  const { userData } = useAuth();
  return (
    <div className="my-6">
      <Typography
        variant="h2"
        className="md:text-4xl text-2xl text-center text-gray-800 ">
        Check Out
      </Typography>
      <div className="flex flex-col lg:flex-row justify-center gap-10 items-center">
        {/* checkout form */}
        <form className="flex flex-col w-2/3 md:w-1/3 gap-4 my-4 md:gap-8 md:my-8">
          <div className="flex flex-col gap-2">
            <Typography variant="h5" className="text-xl text-gray-800">
              E-Mail
            </Typography>
            <Input
              label={userData?.email || ""}
              className="rounded-none"
              disabled
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography variant="h5" className="text-xl text-gray-800">
              Card Number
            </Typography>
            <Input
              color="gray"
              placeholder={"**** **** **** **** "}
              className=" !border-t-blue-gray-200 rounded-none focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Typography variant="h5" className="text-xl text-gray-800">
              Expiration Date
            </Typography>
            <Input
              color="gray"
              placeholder={"****  "}
              className=" !border-t-blue-gray-200 rounded-none focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button
            variant="filled"
            disabled
            className="w-fit rounded-none py-2.5">
            proceed to pay
          </Button>
        </form>
        {/* checkout box */}
        <Checkout btnDisabled />
      </div>
    </div>
  );
};

export default CheckOut;
