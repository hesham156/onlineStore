import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Customer from './pages/Customer'
import Home from './pages/Home'
import Products from './pages/Products'

const Body = () => {
  return (
    <div className='body'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='customer' element={<Customer/>}/>

        </Routes>
    </div>
  )
}

export default Body