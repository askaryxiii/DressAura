import { Button, Input, Typography } from '@material-tailwind/react'
import { useAuth } from '../../context/Auth/AuthContext'
import Checkout from '../../components/user/Checkout'

const CheckOut = () => {
  const { userData } = useAuth()
  return (
    <div className='my-4'>
      <Typography
        variant='h2'
        className='md:text-4xl text-2xl text-center text-teal-800 '
      >
        Check Out
      </Typography>
      <div className='flex flex-col md:flex-row justify-evenly items-center'>
        {/* checkout form */}
        <form className='flex flex-col w-2/3 md:w-1/3 gap-4 my-4 md:gap-8 md:my-8'>
          <div className='flex flex-col gap-2'>
            <Typography variant='h5' className='text-xl text-teal-400'>
              E Mail
            </Typography>
            <Input label={userData?.email || ''} disabled />
          </div>
          <div className='flex flex-col gap-2'>
            <Typography variant='h5' className='text-xl text-teal-400'>
              Card Number
            </Typography>
            <Input color='teal' defaultValue={'**** **** **** **** '} />
          </div>
          <div className='flex flex-col gap-2'>
            <Typography variant='h5' className='text-xl text-teal-400'>
              Expiration Date
            </Typography>
            <Input color='teal' defaultValue={'****  '} />
          </div>
          <Button variant='gradient' disabled className='w-fit'>
            proceed to pay
          </Button>
        </form>
        {/* checkout box */}
        <Checkout btnDisabled />
      </div>
    </div>
  )
}

export default CheckOut
