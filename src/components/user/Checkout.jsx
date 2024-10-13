import { Button, Input, Typography } from '@material-tailwind/react'
import { useCart } from '../../context/cart/CartContext'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/Auth/AuthContext'

const Checkout = ({ btnDisabled }) => {
  const { cartItems, totalAmount } = useCart()
  const { isAuthenticated } = useAuth()
  return (
    <div className='bg-teal-700 flex flex-col md:gap-8 p-4 rounded-3xl  '>
      <div className='flex justify-between '>
        <Typography variant='h5' color='white' className='text-md '>
          Total Price
        </Typography>
        <Typography variant='h5' color='white' className='text-2xl'>
          {totalAmount.toFixed(2)} $
        </Typography>
      </div>
      <div className='flex justify-between'>
        <Typography variant='h5' color='white' className='text-md'>
          Taxes
        </Typography>
        <Typography variant='h5' color='white' className='text-2xl'>
          {(totalAmount * 0.1).toFixed(2)} $
        </Typography>
      </div>
      <div className='flex justify-between md:gap-24'>
        <Typography variant='h5' color='white' className='text-md'>
          Promo Code
        </Typography>
        <Input disabled />
      </div>
      <div className='flex justify-between '>
        <Typography variant='h5' color='white' className='text-md'>
          Total Amount
        </Typography>
        <Typography variant='h5' color='white' className='text-2xl'>
          {(totalAmount * 1.1).toFixed(2)} $
        </Typography>
      </div>
      <div className={btnDisabled && 'hidden'}>
        <Link to={`${isAuthenticated ? '/checkout' : '/login'} `}>
          <Button
            color='green'
            className='text-lg text-center items-center w-full'
            disabled={cartItems?.length == 0}
          >
            CheckOut
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Checkout
