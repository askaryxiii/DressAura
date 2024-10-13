import { Button, Typography } from '@material-tailwind/react'
import { useAuth } from '../../context/Auth/AuthContext'
import { useEffect } from 'react'
import { useProducts } from '../../context/Products/ProductsContext'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const { allUsersInfo, lastUser, getAllUsers, getLastUser } = useAuth()
  const { getAllProducts, products, getLastProduct, lastProduct } =
    useProducts()
  useEffect(() => {
    getAllUsers()
    getLastUser()
    getAllProducts()
    getLastProduct()
  }, [])
  return (
    <div className='flex justify-evenly items-center h-[80vh] gap-8 mx-8'>
      {/* user box */}
      <div className='bg-[#05081c] dark:bg-blue-gray-800 flex flex-col justify-evenly items-center gap-8 p-8 rounded-xl flex-1'>
        <Typography
          as='h2'
          className='font-bold transition-colors text-4xl text-indigo-600 '
        >
          Users
        </Typography>
        <Typography
          as='h2'
          className='font-bold transition-colors text-3xl text-white '
        >
          Number of users :
          <span className='text-light-green-800'>
            {allUsersInfo?.length || 'NA'}
          </span>
        </Typography>
        <Typography
          as='h2'
          className='font-bold transition-colors text-2xl text-white '
        >
          Last user registered is :
          <span className='text-light-green-800'>
            {lastUser?.firstName || 'NA'}
          </span>
        </Typography>
        <Link to={'/admin/users'}>
          <Button className='bg-blue-800 text-black text-sm'>Show Users</Button>
        </Link>
      </div>
      {/* product box */}
      <div className='bg-[#05081c] flex flex-col justify-evenly items-center gap-8 p-8 rounded-xl flex-1 dark:bg-blue-gray-800 '>
        <Typography
          as='h2'
          className='font-bold transition-colors text-4xl text-indigo-600 '
        >
          Products
        </Typography>
        <Typography
          as='h2'
          className='font-bold transition-colors text-3xl text-white '
        >
          Number of products :
          <span className='text-light-green-800'>
            {products?.length || 'NA'}
          </span>
        </Typography>
        <Typography
          as='h2'
          className='font-bold transition-colors text-2xl text-white '
        >
          Last product added :
          <span className='text-light-green-800'>
            {lastProduct?.title?.slice(0, 10) || 'NA'}
          </span>
        </Typography>
        <Link to={'/admin/products'}>
          <Button className='bg-blue-800 text-black text-sm'>
            Show Products
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
