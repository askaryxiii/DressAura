/* eslint-disable no-useless-escape */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Spinner,
  Select,
  Option,
} from "@material-tailwind/react";
import HelperText from "../../components/user/HelperText";
import { useAuth } from "../../context/Auth/AuthContext";

const SignUp = () => {
  // states

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    gender: "male",
    phone: "",
  });
  const [err, setErr] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [checkBoxColor, setCheckBoxColor] = useState("gray");
  const { registerUser, errorMsg, setErrorMsg, loading, theme } = useAuth();
  //   other variables && hooks
  const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const colorTheme = `${theme == "dark" ? "black" : "gray"}`;
  // update image info
  useEffect(() => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      image:
        prevUserInfo.gender === "male"
          ? "https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg?w=360"
          : "https://media.istockphoto.com/id/1081125770/vector/face-expression-of-woman-with-blond-hair.jpg?s=612x612&w=0&k=20&c=mN-oV1RNH964Hu8s8Qjie8tOf6Awyf6e-sYUjR_RnOk=",
    }));
  }, [userInfo?.gender]);
  // submit function
  const submitHandler = (e) => {
    e.preventDefault();
    setErr({});
    setCheckBoxColor("gray");
    setErrorMsg("");
    if (userInfo?.firstName?.length < 3) {
      setErr((prevErr) => ({ ...prevErr, errName: true }));
    } else if (!regexp.test(userInfo.email)) {
      setErr((prevErr) => ({ ...prevErr, errEmail: true }));
    } else if (userInfo?.password?.length < 6) {
      setErr((prevErr) => ({ ...prevErr, errPassword: true }));
    } else if (!isChecked) {
      setCheckBoxColor("red");
    } else {
      registerUser(userInfo, "/login");
    }
  };

  return (
    <div className="flex justify-center bg-bgSignUp bg-cover">
      <Card
        shadow={false}
        className="flex items-center  text-black dark:black dark:bg-gray-200  my-10 py-10 px-4">
        <Typography variant="h4">Sign Up</Typography>
        <Typography color={"gray"} className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          className="mt-6 mb-6 mx-5  flex flex-col gap-4"
          onSubmit={submitHandler}>
          <div>
            <h3 className="text-center text-red-900">{errorMsg}</h3>
          </div>
          {/* first name && last name  */}
          <div className="flex flex-col lg:flex-row justify-evenly gap-2 ">
            <div className="w-full">
              <Input
                label="FirstName"
                value={userInfo?.firstName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, firstName: e.target.value })
                }
                error={err?.errName}
                color={colorTheme}
              />
              <HelperText text="* user name must be 3 characters at least" />
            </div>
            <div className="w-full">
              <Input
                label="LastName"
                value={userInfo?.lastName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, lastName: e.target.value })
                }
                color={colorTheme}
              />
            </div>
          </div>
          {/* Email && Password */}
          <div className="flex flex-col  lg:flex-row justify-evenly gap-2 ">
            <div className="w-full">
              <Input
                label="Email"
                value={userInfo?.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
                error={err?.errEmail}
                color={colorTheme}
              />
              <HelperText text="* email must contain @ " />
            </div>
            <div className="w-full">
              <Input
                label="Password"
                value={userInfo?.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
                error={err?.errPassword}
                type="password"
                color={colorTheme}
              />
              <HelperText text="password must be more than 5 characters" />
            </div>
          </div>
          {/* City && Gender && Phone*/}
          <div className="flex lg:flex-row flex-col  justify-evenly gap-2 ">
            {/* Gender */}
            <div className="w-full">
              <Select
                // label='Select Gender'
                value={userInfo?.gender}
                onChange={(val) =>
                  setUserInfo({
                    ...userInfo,
                    gender: val,
                  })
                }>
                <Option selected value="male">
                  Male
                </Option>
                <Option value="female">Female</Option>
              </Select>
            </div>
            {/* City */}
            <div className="w-full">
              <Input
                label="City"
                value={userInfo?.city}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, city: e.target.value })
                }
                color={colorTheme}
              />
            </div>
            {/* Phone */}
            <div className="w-full">
              <Input
                label="PhoneNumber"
                value={userInfo?.phone}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, phone: e.target.value })
                }
                color={colorTheme}
              />
            </div>
          </div>
          {/* CheckBox */}
          <Checkbox
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            color={checkBoxColor}
            label={
              <Typography variant="small" color={checkBoxColor}>
                I agree the Terms and Conditions
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          {/* button Sign Up */}
          <Button
            className="mt-2 text-md font-normal bg-gray-900 hover:bg-black transition-all py-2 flex justify-center items-center mx-auto"
            fullWidth
            type="submit"
            disabled={loading}>
            {loading ? <Spinner color="amber" /> : "Sign Up"}
          </Button>
          <Typography
            className="mt-1 text-center font-normal"
            color={colorTheme}>
            Already have an account?
            <Link
              to={"/login"}
              className="font-medium text-gray-700 hover:text-black text-md ml-2 transition-all">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
