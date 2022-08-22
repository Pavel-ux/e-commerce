import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar, Cart, Checkout, SignIn, About } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const [order, setOrder] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()
        setProducts(data)
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        setIsLoading(true)
        const response = await commerce.cart.add(productId, quantity)
        setCart(response)
        setIsLoading(false)
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const response = await commerce.cart.update(productId, { quantity })

        setCart(response)
    }

    const handleRemoveFromCart = async (productId) => {
        const response = await commerce.cart.remove(productId)

        setCart(response)
    }

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty()

        setCart(response)
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh()

        setCart(newCart)
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

            setOrder(incomingOrder)
            refreshCart()
        } catch (error) {
            setErrorMessage(error.data.error.message)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        fetchProducts()
        fetchCart()
        setIsLoading(false)
    }, [])

    return (
        <Router>
            <div>
                <Navbar isLoading={isLoading} totalItems={cart.total_items} />
                <Routes>
                    <Route exact index element={<Products products={products} onAddToCart={handleAddToCart} />} />
                    <Route
                        exact
                        path='/cart'
                        element={
                            <Cart
                                cart={cart}
                                handleUpdateCartQty={handleUpdateCartQty}
                                handleRemoveFromCart={handleRemoveFromCart}
                                handleEmptyCart={handleEmptyCart}
                            />
                        }
                    />
                    <Route
                        exact
                        path='/checkout'
                        element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />}
                    />
                    <Route exact path='/signin' element={<SignIn />} />
                    <Route exact path='/about' element={<About />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
