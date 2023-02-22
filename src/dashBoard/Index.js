import React from 'react'
import Body from './Body'
import SideNave from './commponent/SideNave'
import './asset/css/side.css'
import './asset/css/dash.css'
import './asset/css/body.css'

const Index = () => {
  return (
    <div className='dashboard'>
        <SideNave/>
        <Body/>
    </div>
  )
}

export default Index