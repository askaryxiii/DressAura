import { useEffect } from 'react'
import ProductCard from '../../components/user/ProductCard'
import { useProducts } from '../../context/Products/ProductsContext'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import FilteredCategories from '../../components/user/FilteredCategories'
import UpArrow from '../../components/user/UpArrow'

const Products = () => {
  const { getAllProducts, productInfoLoading, filteredProducts } = useProducts()
  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <>
      {productInfoLoading ? (
        <div className='h-[90vh] flex items-center justify-center '>
          <ClimbingBoxLoader color='#303b53' size={26} />
        </div>
      ) : (
        <div>
          <div className='flex min-h-screen justify-center'>
            <FilteredCategories />
            <div className='grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8  lg:gap-16 xl:gap-24 lg:mx-16 mx-4 my-16 h-fit'>
              {filteredProducts.map(
                (
                  { _id, title, description, price, rating, image, stock },
                  index
                ) => (
                  <ProductCard
                    key={index}
                    title={title}
                    description={description}
                    price={price}
                    rating={rating}
                    image={image}
                    stock={stock}
                    _id={_id}
                  />
                )
              )}
            </div>
          </div>
          <UpArrow />
        </div>
      )}
    </>
  )
}

export default Products
