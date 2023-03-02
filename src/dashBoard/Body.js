import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TopNave from './commponent/TopNave'
import Customer from './pages/Customer'
import Home from './pages/Home'
import Products from './pages/Products'

const Body = () => {
  return (
    <div className='body'>
      <div className='container'>
      <TopNave/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='customer' element={<Customer/>}/>

        </Routes>
    </div>
    </div>
  )
}

export default Body