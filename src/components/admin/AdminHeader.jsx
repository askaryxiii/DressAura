import { Navbar, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import DarkMode from '../user/DarkMode'
import logo from "../../../src/image/exlogo.png" ;
const AdminHeader = () => {
  return (
    <Navbar className='sticky top-0 z-20  max-w-full rounded-none px-4 py-0 lg:px-8 lg:py-0  bg-gray-200 border-none shadow-2xl '>
      <div className='flex justify-between items-center mx-14'>
        {/* logo */}
        <Typography
          as='a'
          href='/'
          className='cursor-pointer py-1 font-medium'
        >

          <img src={logo}  className=" w-28 object-cover object-center  "/>

        </Typography>

        <Typography
          as='li'
          variant='h2'
          color='gray'
          className='text-xl font-bold hover:text-gray-900 transition-all'
        >
          <div className='flex gap-4'>
            <Link to={'/'} className='flex items-center'>
              Home
            </Link>

            <DarkMode />
          </div>
        </Typography>
      </div>
    </Navbar>
  );
};

export default AdminHeader;
