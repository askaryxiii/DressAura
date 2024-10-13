import { createContext, useContext } from 'react'

export const ProductsContext = createContext({
  products: [],
  filteredProducts: [],
  product: {},
  lastProduct: {},
  productInfoLoading: false,
  getProductById: () => {},
  getAllProducts: () => {},
  getLastProduct: () => {},
  updateProduct: () => {},
  deleteProduct: () => {},
  addNewProduct: () => {},
  setFilteredProducts: () => {},
})
export const useProducts = () => useContext(ProductsContext)
