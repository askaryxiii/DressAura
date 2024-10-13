import {
  Card,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
} from '@material-tailwind/react'
import { useEffect } from 'react'
import { useAuth } from '../../../context/Auth/AuthContext'
import { Link, useParams } from 'react-router-dom'
import { CardSkeleton } from '../../../components/admin/CardSkeleton'
const ShowUser = () => {
  const { getUserById, userById, loading } = useAuth()
  const { userId } = useParams()
  const { image, firstName, lastName, email, gender, city, phone, role } =
    userById

  useEffect(() => {
    getUserById(userId)
  }, [userId])
  return (
    <div className='flex justify-center items-center h-[90vh]'>
      {loading ? (
        <div className='h-[90vh] flex justify-center items-center'>
          <CardSkeleton />
        </div>
      ) : (
        <Card className='w-1/3 bg-[#16423C] text-white'>
          <CardBody className='flex flex-col gap-4 '>
            <div className='flex justify-center items-center gap-2'>
              <Avatar
                src={image || 'https://placehold.co/600x400?text=user image'}
                alt='avatar'
                variant='rounded'
                size='xl'
              />

              <Typography variant='h3' color='amber' className='mb-2'>
                {`${firstName?.slice(0, 10) || ''} ${
                  lastName?.slice(0, 10) || ''
                }`}
              </Typography>
            </div>
            <div className='flex items-center '>
              <Typography variant='h4' className='flex-1'>
                Email is :
              </Typography>
              <span className='text-blue-gray-300 text-xl flex-1'>
                {email || 'NA'}
              </span>
            </div>
            <div className='flex items-center '>
              <Typography variant='h4' className='flex-1'>
                Gender is :
              </Typography>
              <span className='text-blue-gray-300 text-xl flex-1'>
                {gender || 'NA'}
              </span>
            </div>
            <div className='flex items-center '>
              <Typography variant='h4' className='flex-1'>
                City is :
              </Typography>
              <span className='text-blue-gray-300 text-xl flex-1'>
                {city || 'NA'}
              </span>
            </div>
            <div className='flex items-center'>
              <Typography variant='h4' className='flex-1'>
                Phone is :
              </Typography>
              <span className='text-blue-gray-300 text-xl flex-1'>
                {phone || 'NA'}
              </span>
            </div>
            <div className='flex items-center '>
              <Typography variant='h4' className='flex-1'>
                Role is :
              </Typography>
              <span className='text-blue-gray-300 text-xl flex-1'>
                {role || 'NA'}
              </span>
            </div>
          </CardBody>
          <CardFooter className='pt-0'>
            <Link to={`/admin/users/edit/${userId}`}>
              <Button
                fullWidth
                color='blue'
                className='text-md text-blue-gray-900'
              >
                Edit User
              </Button>
            </Link>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

export default ShowUser
