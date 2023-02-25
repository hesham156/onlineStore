import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import {FaTshirt} from 'react-icons/fa'
const SideNave = () => {
  return (
    <div className='SideNave'>
        <div className='container'>
            <div className='sideTop'>
                 
            </div>
            <div className='sideBottom'>
                <ul>
                    <li><Link to=''><AiFillHome/>Home</Link></li>
                    <li><Link to='products'><FaTshirt/>products</Link></li>
                    <li><Link to='customer'><FiUsers/>customer</Link></li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideNave