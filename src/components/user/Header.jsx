import { useState, useEffect } from 'react'
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from '@material-tailwind/react'
import NavList from './NavList'

const Header = () => {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  return (
    <Navbar className='sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-gray-200 border-none'>
      <div className=' flex items-center justify-evenly text-black font-bold text-2xl'>
        {/* logo */}
        <div>
          <Typography
            as='a'
            href='/'
            className='mr-4 cursor-pointer py-1.5 font-medium'
          >
            <img src='/img/logo.png' />
          </Typography>
        </div>
        {/* other nav items  */}
        <div className='flex items-center lg:w-2/3'>
          <div className='hidden lg:flex w-full'>
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
