import { useEffect, useState } from 'react'
import { useProducts } from '../../context/Products/ProductsContext'
import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react'

const FilteredCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const { products, setFilteredProducts } = useProducts()

  const productsCategories = products.reduce((accumulator, product) => {
    let category = product.category || 'Not Categorized'
    if (!accumulator.includes(category)) {
      accumulator.push(category)
    }
    return accumulator
  }, [])

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(
        products.filter(product =>
          selectedCategories.includes(product.category || 'Not Categorized')
        )
      )
    }
  }, [selectedCategories, products])

  const changeSelectedCategory = e => {
    const category = e.target.value
    const isChecked = e.target.checked
    isChecked
      ? setSelectedCategories([...selectedCategories, category])
      : setSelectedCategories(
          selectedCategories.filter(newCat => newCat !== category)
        )
  }

  return (
    <div className='lg:flex lg:flex-col hidden bg-blue-gray-200 shadow-xl sticky top-20 h-screen'>
      {productsCategories.map((category, index) => (
        <List key={index} className='!min-w-max lg:!min-w-60'>
          <ListItem className='p-0'>
            <label
              htmlFor={`category-${index}`}
              className='flex w-full cursor-pointer items-center p-0 md:px-3 md:py-2'
            >
              <ListItemPrefix className='mr-1 md:mr-3'>
                <Checkbox
                  id={`category-${index}`}
                  ripple={false}
                  className='hover:before:opacity-0 bg-green-900'
                  containerProps={{
                    className: 'p-0',
                  }}
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={changeSelectedCategory}
                  color='green'
                />
              </ListItemPrefix>
              <Typography
                htmlFor={`category-${index}`}
                className='font-medium cursor-pointer'
                component='label'
              >
                {category || 'Not Categorized'}
              </Typography>
            </label>
          </ListItem>
        </List>
      ))}
    </div>
  )
}

export default FilteredCategories
