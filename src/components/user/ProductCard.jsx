import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Spinner,
} from '@material-tailwind/react'
import { Rating, ThinStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { CiShoppingCart } from 'react-icons/ci'
import { useCart } from '../../context/cart/CartContext'
// rating styles
const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9',
}
const ProductCard = ({
  _id,
  title,
  description,
  price,
  rating,
  image,
  stock,
}) => {
  const [starRating, setStarRating] = useState(Math.round(rating.rate))
  const { addItemsToCart, cartLoading } = useCart()

  return (
    <Card className='flex  justify-between  border-none shadow-xl cursor-pointer  hover:scale-105 transition-all group hover:shadow-2xl'>
      <CardHeader
        color='transparent'
        className='relative border-none shadow-none'
      >
        <img
          src={image}
          loading='lazy'
          className='max-w-36 max-h-36 mx-auto rounded '
        />
      </CardHeader>
      <CardBody className='p-2 flex flex-col '>
        <div className='hidden group-hover:flex items-center justify-between '>
          <Button
            className=' rounded-none bg-transparent text-green-800 font-bold text-md border-none shadow-none hover:shadow-none'
            onClick={() => {
              addItemsToCart(_id)
            }}
            disabled={cartLoading[_id]?.add}
          >
            {cartLoading[_id] && cartLoading[_id].add ? (
              <Spinner />
            ) : (
              '+ Add to cart'
            )}
          </Button>
          <CiShoppingCart color='blue' className='text-2xl font-bold ' />
        </div>
        <Typography variant='h5' color='gray' className='text-lg '>
          {title?.slice(0, 30)}
        </Typography>
        <Typography
          variant='paragraph'
          color='gray'
          className='text-xs text-center group-hover:hidden '
        >
          {description?.slice(0, 70)}
        </Typography>

        <Rating
          itemStyles={myStyles}
          style={{ maxWidth: 120 }}
          value={starRating}
          onChange={setStarRating}
          transition='zoom'
        />
        <div className='flex justify-evenly'>
          <Typography variant='h6' color='gray' className='font-bold  text-lg'>
            {price}$
          </Typography>
          <Typography variant='h6' color='gray' className='font-bold'>
            stock:
            <span
              className={`${
                stock < 3 ? `text-red-700` : `text-green-700`
              }  text-lg font-bold`}
            >
              {stock}
            </span>
          </Typography>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProductCard
