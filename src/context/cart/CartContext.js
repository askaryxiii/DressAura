import { createContext, useContext } from 'react'

export const CartContext = createContext({
  cartItems: [],
  totalAmount: 0,

  cartLoading: {},
  clearCartLoading: false,
  cartPageLoading: false,

  addItemsToCart: () => {},
  updateItemsInCart: () => {},
  deleteItemInCart: () => {},
  clearCartHandler: () => {},
  fetchCartData: () => {},
})
export const useCart = () => useContext(CartContext)
