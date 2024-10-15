import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [lastUser, setLastUser] = useState({});
  const [userById, setUserById] = useState({});
  const [allUsersInfo, setAllUsersInfo] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [theme, setTheme] = useState("");
  const navigate = useNavigate();
  const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  // get all user info
  const getAllUsers = () => {
    setLoading(true);
    api
      .get(`/user/users`)
      .then((res) => {
        setAllUsersInfo(res.data);
      })
      .catch((error) => console.error("Error fetching users:", error))
      .finally(() => setLoading(false));
  };
  // get user by id
  const getUserById = (userId) => {
    setLoading(true);
    setUserById({});

    api
      .get(`/user/${userId}`)
      .then((response) => {
        setUserById(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      })
      .finally(() => setLoading(false));
  };

  // user information fetching
  const getUserInfo = () => {
    if (token) {
      setLoading(true);
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUserData(res.data);
        })
        .catch((error) => console.error("Error fetching user data:", error))
        .finally(() => setLoading(false));
    }
  };
  //update user info
  const UpdateUserInfo = (updatedUserData) => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/user/edit/`, updatedUserData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        getUserInfo();
      })
      .catch((error) => {
        if (error.response) {
          throw new Error(
            `Error: ${error.response.data.message || "An error occurred"}`
          );
        } else if (error.request) {
          throw new Error("No response received from server");
        } else {
          throw new Error(`Error: ${error.message}`);
        }
      });
  };
  // get last registered user
  const getLastUser = (token) => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user/last-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLastUser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching last registered user:", error);
      });
  };
  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUserData(null);
  };
  const changeUserRole = (userId) => {
    api
      .put(`/user/change-role/${userId}`)
      .then((response) => {
        setAllUsersInfo(response.data.users);
      })
      .catch((error) => {
        console.error(
          "Error changing role:",
          error.response ? error.response.data : error.message
        );
      });
  };
  const updateUserById = (userId, updatedUserData) => {
    api
      .put(`/user/update/${userId}`, updatedUserData)
      .then((response) => {
        setUserById(response.data);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        throw new Error(
          error.response ? error.response.data.message : error.message
        );
      });
  };

  const deleteUserById = (image, userId) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-red-700 text-white px-4 py-2 rounded hover:bg-red-900 transition-all mx-2",
        cancelButton:
          "bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-900 transition-all mx-2",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        imageUrl: `${image}`,
        imageWidth: 150,

        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          api
            .delete(`user/delete-user/${userId}`)
            .then((res) => {
              setAllUsersInfo(res.data.users);
            })
            .finally(() => {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  const registerUser = (userInfo, navigatePath) => {
    setLoading(true);
    api
      .post(`/user/register`, userInfo)
      .then((res) => {
        navigate(navigatePath);
        if (!res) {
          setErrorMsg("incorrect token");
        }
        // login(res.data)
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err.response.data);
      })
      .finally(() => setLoading(false));
  };
  const isAuthenticated = !!token;
  useEffect(() => {
    getUserInfo();
  }, [token]);
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        isAuthenticated,
        logout,
        userData,
        getUserInfo,
        UpdateUserInfo,
        getAllUsers,
        allUsersInfo,
        getLastUser,
        lastUser,
        changeUserRole,
        getUserById,
        userById,
        updateUserById,
        deleteUserById,
        loading,
        errorMsg,
        setErrorMsg,
        registerUser,
        theme,
        setTheme,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
