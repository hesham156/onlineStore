import React, { useState } from 'react'
import {AiOutlineShoppingCart,AiOutlineUser} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'
const Nave = () => {
  const [cardIndex,setcardIndex] = useState(0)
  return (
    <nav className='nave w-100'>
      <div className='container'>
        <div className='naveTop w-100'>
          <div className='logo'><h2>MRROBOT</h2></div>
          <div className='search'><form><input type="text" placeholder='Search'/><button> <FaSearch/></button></form></div>
          <div className='user'><ul><li><a href='#'>cart</a></li><li><a href='#'><AiOutlineUser/></a></li><li><a href='#' className={(cardIndex>9?"p-20":'p-10')+' cart'}  data-index={cardIndex}><AiOutlineShoppingCart/></a></li></ul></div>
          </div>
          <div className='naveBottom w-100'>
            <div className='category'>
              <ul>
              <li><a href='#'>sales</a></li>
              <li><a href='#'>chose</a></li>
              <li><a href='#'>men</a></li>
              <li><a href='#' onClick={()=>{setcardIndex(cardIndex+1)}}>women</a></li>
              </ul>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Nave