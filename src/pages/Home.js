import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from '../component/Category'
import Footer from '../component/Footer'
import ImgSlider from '../component/ImgSlider'
import Nave from '../component/Nave'
import ProductSlider from '../component/ProductSlider'
import Product from './Product'
import i1 from '../asset/img/1.png'
import i2 from '../asset/img/2.png'
import i3 from '../asset/img/3.png'
import i4 from '../asset/img/4.png'
import i5 from '../asset/img/5.png'
import i6 from '../asset/img/6.png'

const Home = () => {
  let imgs = [i1,i2,i3,i4,i5,i6]
  return (
    <div className='home'>
        <Nave/>
            <Routes>
                  <Route path='/' element={<>
                        <ImgSlider imgs={imgs}/>
                        <Category/>
                        <ProductSlider/>
                </>}/>
                    <Route path='product/:id' element={<Product/>}/>
            </Routes>
           
        <Footer/>
    </div>
  )
}

export default Home