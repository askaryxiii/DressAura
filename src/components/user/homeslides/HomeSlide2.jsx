import { Typography, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
const HomeSlide2 = () => {
  return (
    <div className='xl:h-[1000px] relative flex flex-col justify-center items-center gap-2 py-2 dark:bg-[#1e1e1e]'>
      <div className=' xl:absolute top-12 right-40 '>
        <img src='/img/banner/banner-1.jpg' className='rounded-lg shadow' />
      </div>
      <div className=' xl:absolute bottom-36 left-40'>
        <img src='/img/banner/banner-2.jpg' className='rounded-lg shadow' />
      </div>
      <div className=' xl:absolute bottom-12 right-40'>
        <img src='/img/banner/banner-3.jpg' className='rounded-lg shadow' />
      </div>
      <div className=' absolute top-40 left-1/2 transform -translate-x-1/2'>
        <Typography
          variant='h2'
          className='text-5xl text-red-700 xl:text-blue-gray-800 dark:text-gray-200'
        >
          Clothing
        </Typography> 
        <Typography
          variant='h2'
          className='text-5xl text-red-700 xl:text-blue-gray-800 dark:text-gray-200'
        >
          Collections 2024
        </Typography>
        <Link to={'/products'}>
          <Button className='bg-transparent border-none shadow-none hover:shadow-none'>
            <Typography
              variant='h5'
              className='underline text-gray-600 xl:text-blue-gray-500 hover:text-teal-700 transition-all dark:text-red-900'
            >
              Shop Now
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default HomeSlide2
