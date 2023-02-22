import React from 'react'
import { Link } from 'react-router-dom'

const SideNave = () => {
  return (
    <div className='SideNave'>
        <div className='container'>
            <div className='sideTop'></div>
            <div className='sideBottom'>
                <ul>
                    <li><Link to=''>Home</Link></li>
                    <li><Link to='products'>products</Link></li>
                    <li><Link to='customer'>customer</Link></li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideNave