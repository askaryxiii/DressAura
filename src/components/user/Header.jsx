import { useState, useEffect } from 'react'
import {
  Navbar,
  IconButton,
  Collapse,
} from '@material-tailwind/react'
import NavList from './NavList'
import { Link } from 'react-router-dom'
import logo from "../../../public/img/logo(2).png";

const Header = () => {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  return (
    <Navbar className='sticky top-0 z-50  max-w-full rounded-none  py-1 lg:px-8  border-none'>
      <div className=' flex items-center justify-between text-black font-bold text-xl px-4 '>
        {/* logo */}
        <div className='flex justify-center'> 
          <Link
            to='/'
            className='mr-4 cursor-pointer '
          >
            <img
            className=" w-44 object-cover object-center "
            src={logo}
          />
          </Link>
        </div>
        {/* other nav items  */}
        <div className='flex  items-center lg:w-2/3'>
          <div className='hidden  lg:flex w-full'>
            <NavList />
          </div>

          {/* mobile hamburger   item  */}
          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className='h-6 w-6'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      {/* mobile hamburger menu */}
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  )
}

export default Header
