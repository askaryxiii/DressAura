import { Navbar, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import DarkMode from '../user/DarkMode'
const AdminHeader = () => {
  return (
    <Navbar className='sticky top-0 z-20 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[#0e1d3e] border-none shadow-2xl'>
      <div className='flex justify-between items-center mx-14'>
        {/* logo */}
        <Typography
          as='a'
          href='/'
          className='cursor-pointer py-1.5 font-medium'
        >
          <img src='/img/logo.png' />
        </Typography>

        <Typography
          as='li'
          variant='h2'
          color='white'
          className='text-xl font-bold hover:text-blue-500 transition-all'
        >
          <div className='flex gap-4'>
            <Link to={'/'} className='flex items-center hover:text-yellow-600'>
              Home
            </Link>

            <DarkMode />
          </div>
        </Typography>
      </div>
    </Navbar>
  )
}

export default AdminHeader
