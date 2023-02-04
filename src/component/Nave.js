import React from 'react'
import  logo from '../asset/img/logo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
const Nave = () => {
  return (
    <nav className='nave '>
      <div className='container center'>
          <div className='logo w-25'><h1><img src={logo}/></h1></div>
          <div className='search w-50'>
               <div className='searchBar'>
                       <input type="text" placeholder='Search'/>
               </div>
          </div>
          <div className='lnks w-25'>
          <AiOutlineShoppingCart/>
          <div className='usericon'>
            <div className='icon'>
            <FaUserCircle/>
            </div>
             <p>MY Account</p>
             <p>Login</p>
          </div>
          </div>
      </div>
      <div className='container categor'>

      </div>
    </nav>
  )
}

export default Nave