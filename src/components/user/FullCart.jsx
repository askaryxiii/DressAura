import { Button, Spinner, Typography } from '@material-tailwind/react'
import { useCart } from '../../context/cart/CartContext'
import { MdDelete } from 'react-icons/md'

const FullCart = ({ productId, title, image, price, quantity, stock }) => {
  const { updateItemsInCart, deleteItemInCart, cartLoading } = useCart()
  const handleQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return
    updateItemsInCart({ productId, quantity: newQuantity })
  }
  const removeItemHandler = productId => {
    deleteItemInCart(productId)
  }
  const isLoading = cartLoading[productId] || {}

  return (
    <div className='flex flex-col gap-2 md:gap-8 md:m-4'>
      {/* img && title && price */}
      <div className='flex justify-evenly items-center'>
        <img
          src={image}
          className='max-w-12 max-h-12 md:max-w-28 md:max-h-28 rounded'
          alt={title}
        />
        <Typography
          variant='h5'
          className=' text-sm md:text-md uppercase text-gray-600 dark:text-gray-300'
        >
          {title?.slice(0, 30)}
        </Typography>
        <Typography
          variant='h5'
          className='text-md sm:text-lg md:text-2xl uppercase text-gray-600 dark:text-gray-300'
        >
          {price} $
        </Typography>
      </div>
      {/* quantity operations amount */}
      <div className='flex justify-evenly items-center'>
        <Button
          color='red'
          disabled={quantity == 1 || isLoading.update}
          onClick={() => handleQuantity(productId, quantity - 1)}
          className='w-20 md:w-32 flex justify-center items-center'
        >
          {isLoading.update ? <Spinner className='h-4 w-4' /> : 'Decrease'}
        </Button>
        <Typography
          variant='h5'
          className='text-lg md:text-2xl uppercase text-gray-600 dark:text-gray-300 '
        >
          {quantity}
        </Typography>
        <Button
          color='green'
          onClick={() => handleQuantity(productId, quantity + 1)}
          disabled={quantity >= stock || isLoading.update}
          className='w-20 md:w-32 flex justify-center items-center'
        >
          {isLoading.update ? <Spinner className='h-4 w-4' /> : 'Increase'}
        </Button>
        <Typography
          variant='h5'
          className='text-lg md:text-2xl uppercase text-gray-600 dark:text-gray-300'
        >
          {(price * quantity).toFixed(2)} $
        </Typography>
        <Typography
          variant='h5'
          color='gray'
          className='hidden md:flex items-center text-red-400'
        >
          <span className='text-sm text-gray-500'>items left :</span>
          {stock - quantity}
        </Typography>
        <Button
          className='bg-transparent text-black shadow-none border-none hover:shadow-none '
          onClick={() => removeItemHandler(productId)}
          disabled={isLoading.delete}
        >
          {isLoading.delete ? <Spinner /> : <MdDelete className='text-3xl' />}
        </Button>
      </div>
      <div className='h-1 bg-gray-300 rounded'></div>
    </div>
  )
}

export default FullCart
