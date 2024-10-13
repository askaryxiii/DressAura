import { Typography, Button, Spinner } from '@material-tailwind/react'
import { useCart } from '../../context/cart/CartContext'
import EmptyCart from '../../components/user/EmptyCart'
import FullCart from '../../components/user/FullCart'
import { MdDelete } from 'react-icons/md'
import ClockLoader from 'react-spinners/ClockLoader'

import Checkout from '../../components/user/Checkout'

const Cart = () => {
  const {
    cartItems,
    totalAmount,
    clearCartHandler,
    clearCartLoading,
    cartPageLoading,
  } = useCart()
  return (
    <div className='min-h-screen'>
      {cartPageLoading ? (
        <div className='h-[80vh] flex items-center justify-center  '>
          <ClockLoader color='#1f3f28' size={60} />
        </div>
      ) : cartItems?.length == 0 ? (
        <EmptyCart />
      ) : (
        <div className='flex flex-col lg:flex-row justify-evenly items-center md:items-start md:gap-16 md:m-8'>
          {/* // cart items */}
          <div className='w-full flex flex-col justify-evenly gap-2 my-8'>
            {/* clear cart items  */}
            <Button
              className='bg-blue-gray-900 dark:bg-gray-200 w-fit mx-auto'
              onClick={() => {
                clearCartHandler()
              }}
              disabled={clearCartLoading}
            >
              {clearCartLoading ? (
                <Spinner />
              ) : (
                <div className='flex justify-center items-center md:gap-2'>
                  <Typography
                    variant='h5'
                    color='red'
                    className='text-md md:text-lg uppercase '
                  >
                    ClearCart
                  </Typography>
                  <MdDelete className='text-lg md:text-3xl dark:text-gray-800' />
                </div>
              )}
            </Button>
            {cartItems?.map(
              ({ productId, title, quantity, image, price, stock }, index) => (
                <div key={index}>
                  <FullCart
                    productId={productId}
                    price={price}
                    title={title}
                    quantity={quantity}
                    image={image}
                    stock={stock}
                  />
                </div>
              )
            )}
            <Typography
              variant='h5'
              className='text-lg md:text-2xl uppercase text-gray-800 dark:text-white text-center'
            >
              total amount :
              <span className='text-green-800 mx-0.5'>
                {(totalAmount || 0).toFixed(2)}
              </span>
              $
            </Typography>
          </div>
          {/* checkout */}
          <div className='lg:w-1/2'>
            <Checkout />
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
