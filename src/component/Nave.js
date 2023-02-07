import React from 'react'

const Nave = () => {
  return (
    <nav className='nave w-100'>
      <div className='container'>
        <div className='naveTop w-100'>
          <div className='logo'><h2>MRROBOT</h2></div>
          <div className='search'><form><input type="text" placeholder='Search'/><input type="submit" value="search"/></form></div>
          <div className='user'><ul><li><a href='#'>cart</a></li><li><a href='#'>user</a></li><li><a href='#'>cart</a></li></ul></div>
          </div>
          <div className='naveBottom w-100'>
            <div className='category'>
              <ul>
              <li><a href='#'>sales</a></li>
              <li><a href='#'>chose</a></li>
              <li><a href='#'>men</a></li>
              <li><a href='#'>women</a></li>
              </ul>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Nave