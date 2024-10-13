import Swal from 'sweetalert2'
import { useState } from 'react'
import { ProductsContext } from './ProductsContext'
import axios from 'axios'
import { useAuth } from '../Auth/AuthContext'
import { useNavigate } from 'react-router-dom'

const ProductsProvider = ({ children }) => {
  const navigate = useNavigate()
  const { token } = useAuth()
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [lastProduct, setLastProduct] = useState({})
  const [productInfoLoading, setProductInfoLoading] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])

  const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  // get all products
  const getAllProducts = () => {
    setProductInfoLoading(true)
    api
      .get(`/product`)
      .then(res => {
        setProducts(res.data)
      })
      .catch(error => {
        console.error('Error fetching all products:', error)
        if (error.response) {
          console.error('Response data:', error.response.data)
          console.error('Response status:', error.response.status)
        } else if (error.request) {
          console.error('No response received:', error.request)
        } else {
          console.error('Error setting up request:', error.message)
        }
      })
      .finally(() => setProductInfoLoading(false))
  }

  // git product by id
  const getProductById = id => {
    setProduct({})
    setProductInfoLoading(true)
    api
      .get(`/product/${id}`)
      .then(res => {
        setProduct(res.data)
      })
      .catch(error => {
        console.error(`Error fetching product with id ${id}:`, error)
      })
      .finally(() => setProductInfoLoading(false))
  }
  // get last product
  const getLastProduct = () => {
    api
      .get(`/product/last-product`)
      .then(res => {
        console.log('Last Product:', res.data)
        setLastProduct(res.data)
      })
      .catch(error => {
        console.error('Error fetching last product:', error)
      })
  }

  //update product
  const updateProduct = (productId, productInfo) => {
    api
      .put(`/product/edit/${productId}`, productInfo)
      .then(res => {
        setProduct(res.data)
      })
      .catch(err => console.error(err))
  }

  // add new product
  const addNewProduct = newProduct => {
    api
      .post(`/product/add`, newProduct)
      .then(res => {
        console.log(res.data.products)
      })
      .finally(() => {
        navigate('/admin/products')
      })
      .catch(err => console.error(err))
  }

  // delete product
  const deleteProduct = (image, pId) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          'bg-red-700 text-white px-4 py-2 rounded hover:bg-red-900 transition-all mx-2',
        cancelButton:
          'bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-900 transition-all mx-2',
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        // icon: 'warning',
        imageUrl: `${image}`,
        imageWidth: 150,

        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then(result => {
        if (result.isConfirmed) {
          api
            .delete(`/product/${pId}`)
            .then(res => {
              console.log(res.data.products)
              setProducts(res.data.products)
            })
            .finally(() => {
              swalWithBootstrapButtons.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              })
            })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
          })
        }
      })
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        getProductById,
        product,
        getAllProducts,
        getLastProduct,
        lastProduct,
        productInfoLoading,
        updateProduct,
        deleteProduct,
        addNewProduct,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
export default ProductsProvider
