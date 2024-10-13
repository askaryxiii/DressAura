import { createContext, useContext } from 'react'

export const AuthContext = createContext({
  userData: {},
  lastUser: {},
  userById: {},
  allUsersInfo: [],
  token: '',
  theme: '',
  isAuthenticated: false,
  loading: false,
  errorMsg: '',
  setErrorMsg: () => {},
  setTheme: () => {},
  login: () => {},
  logout: () => {},
  getUserInfo: () => {},
  UpdateUserInfo: () => {},
  getAllUsers: () => {},
  getLastUser: () => {},
  changeUserRole: () => {},
  getUserById: () => {},
  updateUserById: () => {},
  deleteUserById: () => {},
  registerUser: () => {},
})
export const useAuth = () => useContext(AuthContext)
