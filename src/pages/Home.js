import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../component/Footer'
import Nave from '../component/Nave'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
        <Nave/>
            <Routes>
                <Route path='product/:id' element={<Product/>}/>
            </Routes>
        <Footer/>
    </div>
  )
}

export default Home