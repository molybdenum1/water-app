// import React from 'react'
import Header from '../../componetns/Header'
import Footer from '../../componetns/Footer'
import Breadcrumbs from '../../componetns/Breadcrumbs'
import NavBar from '../../componetns/NavBar'
import Cart from '../../componetns/Cart'

const CartPage = () => {
  return (
    <>
        <Header />
        <NavBar />
        <Breadcrumbs title="Cart"/>
        <Cart />
        <Footer/>
    </>
  )
}

export default CartPage
