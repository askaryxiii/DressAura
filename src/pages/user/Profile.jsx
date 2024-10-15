import { Button, Typography } from "@material-tailwind/react";
import { useAuth } from "../../context/Auth/AuthContext";
import InputForm from "../../components/user/InputForm";
import { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Profile = () => {
  const { userData, UpdateUserInfo, loading } = useAuth();
  const [updatedUser, setUpdatedUser] = useState({ ...userData });
  const { image, firstName, lastName, gender } = userData;
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setUpdatedUser(userData);
  }, [userData]);

  const editProfileHandler = async (e) => {
    e.preventDefault();
    try {
      UpdateUserInfo(updatedUser);
      setDisabled(true);
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };
  return (
    <>
      {loading ? (
        <div className="h-[90vh] flex items-center justify-center ">
          <ClockLoader color="#2d5335" size={70} />
        </div>
      ) : (
        <div className="flex flex-col items-center my-10 gap-3">
          <Typography
            variant="h2"
            className="text-4xl md:text-start text-center uppercase text-blue-gray-700 dark:text-gray-300">
            My Profile
          </Typography>

          <div className="flex flex-col gap-2 ">
            <hr className="w-full pb-5" />
            {/* profile info */}
            <div className="flex flex-col gap-10 lg:flex-row">
              <img className="rounded-xl shadow-xl" src={image || ""} />
              <div className="flex flex-col gap-4 py-10">
                <Typography
                  variant="h2"
                  className="text-3xl md:text-start text-center text-blue-gray-700 uppercase">
                  {firstName || ""}
                </Typography>
                <div>
                  <Typography
                    variant="paragraph"
                    className=" text-gray-600 dark:text-gray-300">
                    {`My name is ${firstName} ${lastName}`}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className=" text-gray-600 dark:text-gray-300 ">
                    {`I'm ${gender || ""} and I'm member of this site.`}
                  </Typography>
                </div>
              </div>
              <div className="h-0.5 bg-blue-gray-200"></div>
            </div>
            {/* profile form  */}
            <form className="mt-8 mb-2 md:w-full max-w-screen-lg flex flex-col gap-4">
              <InputForm
                label="First Name"
                input={updatedUser?.firstName}
                text="Better to have a real name to give a good impression to others that they are dealing with a real person"
                text2="Note enough to have your first name and last name"
                textType
                disabled={disabled}
                onChange={(e) => {
                  setUpdatedUser({ ...updatedUser, firstName: e.target.value });
                }}
              />
              <InputForm
                label="Last Name"
                input={updatedUser?.lastName}
                text="Better to have a real name to give a good impression to others that they are dealing with a real person"
                text2="Note enough to have your first name and last name"
                textType
                disabled={disabled}
                onChange={(e) => {
                  setUpdatedUser({ ...updatedUser, lastName: e.target.value });
                }}
              />
              <InputForm
                label="Email Address"
                input={updatedUser?.email}
                text="Better to have a real email to give a good impression to others that they are dealing with a real person"
                textType
                disabled={disabled}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, email: e.target.value })
                }
              />
              <InputForm
                label="gender"
                gender={gender}
                text="Please Enter your correct gender"
                selectType
                disabled={disabled}
                onChange={(val) =>
                  setUpdatedUser({ ...updatedUser, gender: val })
                }
              />
              {disabled ? (
                <Button
                  variant="filled"
                  className="md:w-fit w-full bg-black rounded-sm "
                  onClick={() => setDisabled(false)}>
                  Edit Profile
                </Button>
              ) : (
                <div className="flex justify-between">
                  <Button
                    color="green"
                    className="w-fit"
                    onClick={(e) => {
                      editProfileHandler(e);
                    }}>
                    Save
                  </Button>
                  <Button
                    color="red"
                    className="w-fit"
                    onClick={() => setDisabled(true)}>
                    Cancel
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
