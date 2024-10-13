import DarkMode from './DarkMode'
import { Link, useLocation } from 'react-router-dom'
import { Badge, Typography } from '@material-tailwind/react'
import { useAuth } from '../../context/Auth/AuthContext'
import ProfileMenu from './ProfileMenu'
import { IoEnterOutline } from 'react-icons/io5'
import { CiShoppingCart } from 'react-icons/ci'
import { useCart } from '../../context/cart/CartContext'

const NavList = () => {
  const { isAuthenticated } = useAuth()
  const { cartItems } = useCart()
  const location = useLocation()
  return (
    <ul className='mt-2 mb-4 flex  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between w-full '>
      <div className='flex flex-1 justify-center   gap-4'>
        <Typography as='li' variant='h2' color='gray' className='p-1  text-xl '>
          <Link
            to={'/'}
            className={`flex items-center hover:scale-105 ${
              location.pathname == '/' && 'text-black font-bold'
            }`}
          >
            Home
          </Link>
        </Typography>
        <Typography as='li' variant='h2' color='gray' className='p-1  text-xl'>
          <Link
            to={'/products'}
            className={`flex items-center hover:scale-105 ${
              location.pathname == '/products' && 'text-black font-bold'
            }`}
          >
            Shop
          </Link>
        </Typography>
      </div>

      <div className='flex gap-4'>
        <Typography
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1  text-xl'
        >
          <Link
            to={'/cart'}
            className={`flex items-center  text-gray-900 px-4 py-1 rounded hover:scale-110 transition-all `}
          >
            <Badge
              content={cartItems?.length}
              className={cartItems?.length == 0 ? 'hidden' : ''}
            >
              <CiShoppingCart className='text-3xl font-bold' />
            </Badge>
          </Link>
        </Typography>
        {/* login &profile icon */}
        {isAuthenticated ? (
          <ProfileMenu />
        ) : (
          <Typography
            as='li'
            variant='small'
            color='blue-gray'
            className='p-1  text-xl'
          >
            <Link
              to={'/login'}
              className={`flex items-center  text-blue-900 px-4 py-1 rounded hover:scale-110 transition-all `}
            >
              <IoEnterOutline className='text-3xl' />
            </Link>
          </Typography>
        )}
        <DarkMode />
      </div>
    </ul>
  )
}

export default NavList
