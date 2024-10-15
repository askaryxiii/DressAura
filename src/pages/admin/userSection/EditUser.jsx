import { useEffect, useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/Auth/AuthContext";
const EditUser = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { getUserById, userById, updateUserById, loading } = useAuth();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    image: "",
  });
  useEffect(() => {
    getUserById(userId);
  }, [userId]);
  useEffect(() => {
    if (userById) {
      setUserInfo((prev) => ({
        ...prev,
        firstName: userById.firstName,
        lastName: userById.lastName,
        email: userById.email,
        gender: userById.gender,
        image: userById.image,
      }));
    }
  }, [userById]);

  const submitHandler = (e) => {
    e.preventDefault();
    updateUserById(userId, userInfo);
    navigate(`/admin/users/${userId}`);
  };
  return (
    <div className="flex flex-col gap-6 w-1/2 h-[90vh] py-10 px-16 ">
      <Typography variant="h4">Edit Product</Typography>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <span>User Image</span>
          <Input
            className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={userInfo?.image || ""}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, image: e.target.value }))
            }
            color="green"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>First Name</span>
          <Input
            size="md"
            value={userInfo?.firstName || ""}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, firstName: e.target.value }))
            }
            className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>Last Name</span>
          <Input
            size="md"
            value={userInfo?.lastName || ""}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, lastName: e.target.value }))
            }
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
            value={userInfo?.email || ""}
            onChange={(e) =>
              setUserInfo((prev) => ({ ...prev, email: e.target.value }))
            }
            className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>User Gender</span>
          <Select
            // label='Select Gender'
            value={userInfo?.gender || ""}
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

        <Button
          size="md"
          type="submit"
          className="text-xs w-fit bg-black rounded-sm">
          Edit User
        </Button>
      </form>
    </div>
  );
};

export default EditUser;

// return (
//   <Card
//     shadow={true}
//     className='flex items-center text-white h-[90vh] bg-[#021526] mx-8 gap-8'
//   >
//     <Typography variant='h4' className='mt-4'>
//       Edit User
//     </Typography>

//     <form
//       className='w-full flex flex-col items-center justify-evenly gap-8 px-8'
//       onSubmit={submitHandler}
//     >
//       <div className='gap-8 flex items-center w-full '>
//         <Input
//           label='First Name'
//           value={userInfo?.firstName || ''}
//           onChange={e =>
//             setUserInfo(prev => ({ ...prev, firstName: e.target.value }))
//           }
//           color='green'
//           className='text-gray-400 text-lg'
//         />
//         <Input
//           label='Last Name'
//           value={userInfo?.lastName || ''}
//           onChange={e =>
//             setUserInfo(prev => ({ ...prev, lastName: e.target.value }))
//           }
//           color='green'
//           className='text-gray-400 text-lg'
//         />
//       </div>
//       <div className='w-full gap-8 flex items-center'>
//         <Input
//           label='Email Address'
//           value={userInfo?.email || ''}
//           onChange={e =>
//             setUserInfo(prev => ({ ...prev, email: e.target.value }))
//           }
//           color='green'
//           className='text-gray-400 text-lg'
//         />

//         <Select
//           // label='Select Gender'
//           value={userInfo?.gender || ''}
//           onChange={val =>
//             setUserInfo({
//               ...userInfo,
//               gender: val,
//             })
//           }
//         >
//           <Option selected value='male'>
//             Male
//           </Option>
//           <Option value='female'>Female</Option>
//         </Select>
//       </div>
//       <div className='w-full gap-8 flex items-center'>
//         <Input
//           label='User Image'
//           value={userInfo?.image || ''}
//           onChange={e =>
//             setUserInfo(prev => ({ ...prev, image: e.target.value }))
//           }
//           color='green'
//           className='text-gray-400 text-lg'
//         />
//       </div>

//       <Button
//         className='text-lg font-normal'
//         type='submit'
//         color={'green'}
//         fullWidth
//       >
//         Edit User
//       </Button>
//     </form>
//   </Card>
// )
