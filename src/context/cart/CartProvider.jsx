import { useEffect, useState } from 'react'
import { CartContext } from './CartContext'
import axios from 'axios'
import { useAuth } from '../Auth/AuthContext'

const CartProvider = ({ children }) => {
  const { token } = useAuth()
  const [cartItems, setCartItems] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [cartLoading, setCartLoading] = useState({})
  const [cartPageLoading, setCartPageLoading] = useState(false)
  const [clearCartLoading, setClearCartLoading] = useState(false)

  // getAllCartItems
  const fetchCartData = () => {
    setCartPageLoading(true)
    setCartLoading({})
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/cart`)
      .then(res => {
        const cartItemsMapping = res.data.items.map(
          ({ product, quantity }) => ({
            productId: product?._id,
            title: product?.title,
            price: product?.price,
            description: product?.description,
            category: product?.category,
            image: product?.image,
            rating: product?.rating,
            stock: product?.stock,
            unitPrice: product?.unitPrice,
            quantity,
          })
        )
        setCartItems(cartItemsMapping)
        setTotalAmount(res.data.totalAmount)
 
      })
      .catch(err => console.error(err))
      .finally(() => setCartPageLoading(false))
  }
  useEffect(() => {
    fetchCartData()
  }, [token])

  // add items to cart function
  const addItemsToCart = productId => {
    setCartLoading(prev => ({
      ...prev,
      [productId]: { ...prev[productId], add: true },
    }))
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/cart/items`,
        {
          productId,
          quantity: 1,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        const cart = res.data
        const cartItemsMapping = res.data.items.map(
          ({ product, quantity }) => ({
            productId: product?._id,
            title: product?.title,
            price: product?.price,
            description: product?.description,
            category: product?.category,
            image: product?.image,
            rating: product?.rating,
            unitPrice: product?.unitPrice,
            stock: product?.stock,
            quantity,
          })
        )

        setCartItems(cartItemsMapping)
        setTotalAmount(cart.totalAmount)
      })

      .catch(err => console.error(err))
      .finally(() =>
        setCartLoading(prev => ({
          ...prev,
          [productId]: { ...prev[productId], add: false },
        }))
      )
  }

  // update cart
  const updateItemsInCart = async ({ productId, quantity }) => {
    setCartLoading(prev => ({
      ...prev,
      [productId]: { ...prev[productId], update: true },
    }))
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/cart/items/edit`,
        {
          productId,
          quantity,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      const cart = res.data
      const cartItemsMapping = cart.items.map(
        ({ product, quantity, unitPrice }) => ({
          productId: product._id,
          title: product.title,
          description: product.description,
          category: product.category,
          image: product.image,
          rating: product.rating,
          stock: product.stock,
          quantity,
          price: unitPrice,
        })
      )
      setCartItems(cartItemsMapping)
      setTotalAmount(cart.totalAmount)
    } catch (err) {
      console.error(err)
    } finally {
      setCartLoading(prev => ({
        ...prev,
        [productId]: { ...prev[productId], update: false },
      }))
    }
  }
  const deleteItemInCart = productId => {
    setCartLoading(prev => ({
      ...prev,
      [productId]: { ...prev[productId], delete: true },
    }))
    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}/cart/items/delete/${productId}`
      )
      .then(res => {
        const cart = res.data
        const cartItemsMapping = res.data.items.map(
          ({ product, quantity, unitPrice }) => ({
            productId: product._id,
            title: product.title,
            description: product.description,
            category: product.category,
            image: product.image,
            rating: product.rating,
            stock: product.stock,
            quantity,
            price: unitPrice,
          })
        )

        setCartItems([...cartItemsMapping])
        setTotalAmount(cart.totalAmount)
      })
      .catch(err => console.error(err))
      .finally(() => {
        setCartLoading(prev => {
          const newState = { ...prev }
          delete newState[productId]
          return newState
        })
      })
  }

  const clearCartHandler = () => {
    setClearCartLoading(true)
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/cart`)
      .then(() => {
        setCartItems([])
        setTotalAmount(0)
      })
      .catch(err => console.error(err))
      .finally(() => setClearCartLoading(false))
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalAmount,
        addItemsToCart,
        setCartItems,
        setTotalAmount,
        updateItemsInCart,
        deleteItemInCart,
        clearCartHandler,
        fetchCartData,
        clearCartLoading,
        cartLoading,
        cartPageLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
