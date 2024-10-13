import { Link, useParams } from 'react-router-dom'
import { useProducts } from '../../../context/Products/ProductsContext'
import { Card, Typography, Button } from '@material-tailwind/react'
import { useEffect } from 'react'
import { CardSkeleton } from '../../../components/admin/CardSkeleton'

const ShowProduct = () => {
  const { productId } = useParams()
  const { getProductById, product, productInfoLoading } = useProducts()

  useEffect(() => {
    getProductById(productId)
  }, [productId])

  return (
    <div className='bg-blue-gray-400 pb-1'>
      {productInfoLoading ? (
        <div className='h-[90vh] flex justify-center items-center'>
          <CardSkeleton />
        </div>
      ) : (
        <div className='flex flex-col gap-4 justify-center items-center w-full h-[90vh] '>
          <Card className='w-2/3  mt-16 max-w-screen-xl shadow-lg bg-gray-200'>
            <figure className='relative h-96 w-full object-cover'>
              <img
                src={product?.image}
                alt={product?.title}
                className='h-full w-full rounded-xl object-cover object-center'
              />
              <figcaption className='absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/50 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm items-center'>
                <div className='flex flex-col items-center'>
                  <Typography variant='h4' color='blue-gray'>
                    {product?.title || ''}
                  </Typography>
                  <Typography color='gray' className='mt-2 font-normal'>
                    {product?.description?.slice(0, 100) || ''}
                  </Typography>
                  <div className='flex justify-around w-full'>
                    <Typography variant='h4' color='blue-gray'>
                      {product?.price} $
                    </Typography>
                    <Typography variant='h5' color='red'>
                      {`Items Left : ${product?.stock}`}
                    </Typography>
                  </div>
                </div>
                <div className='flex items-center gap-1.5 font-normal'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='-mt-0.5 h-5 w-5 text-yellow-700'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <Typography variant='h5' color='blue-gray'>
                    {product?.rating?.rate.toFixed(0) || ''}
                  </Typography>
                </div>
              </figcaption>
            </figure>
          </Card>
          <Link to={`/admin/products/edit/${productId}`}>
            <Button size='lg' className='text-lg bg-blue-700'>
              Edit Product
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default ShowProduct
