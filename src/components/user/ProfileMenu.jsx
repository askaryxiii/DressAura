import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from '@material-tailwind/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useAuth } from '../../context/Auth/AuthContext'
import { BsPersonCircle } from "react-icons/bs"

const ProfileMenu = () => {
  const { userData, logout } = useAuth()
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)
  const logOutHandler = () => {
    logout()
    navigate('/')
    closeMenu()
  }
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
      <MenuHandler>
        <Button
          variant='text'
          color='gray'
          className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'
        >
          {/* <Avatar
            variant='circular'
            size='sm'
            alt={userData?.email || ''}
            className='border border-gray-900 p-0.5'
            src={
              userData?.image ||
              'https://img.freepik.com/free-vector/man-red-shirt-with-white-collar_90220-2873.jpg?t=st=1725674282~exp=1725677882~hmac=f7bfca7602c44905f50116f08558e9b0094faedd3715e037043065702980835b&w=740'
            }
          /> */}
            <BsPersonCircle  className="text-3xl "/>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className='p-1'>
        {userData?.role == 'admin' && (
          <Link to={'/admin'}>
            <MenuItem
              onClick={closeMenu}
              className={`flex items-center  gap-2 rounded `}
            >
              <Typography
                as='span'
                variant='small'
                className='font-normal hover:text-gray-900'
              >
                Admin Dashboard
              </Typography>
            </MenuItem>
          </Link>
        )}
        <Link to={'/profile'}>
          <MenuItem
            onClick={closeMenu}
            className={`flex items-center gap-2 rounded `}
          >
            <Typography
              as='span'
              variant='small'
              className='font-normal'
              color={'inherit'}
            >
              My Profile
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem
          onClick={logOutHandler}
          className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus
          `}
        >
          <Typography
            as='span'
            variant='small'
            className='font-normal'
            color={'red'}
          >
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ProfileMenu
