import React, { useEffect, useState } from 'react'
import Body from './Body'
import SideNave from './commponent/SideNave'
import './asset/css/side.css'
import './asset/css/dash.css'
import './asset/css/body.css'
import Login from '../pages/Login'
const Index = () => {
  const [admin,setAdmin]=useState()
  useEffect(()=>{
    setAdmin(localStorage.getItem('hesham'))
    
  },[])
  return (
    <>
    {admin?
    <div className='dashboard'>
        <SideNave/>
        <Body/>
    </div>:<Login/>}
    </>
  )
}

export default Index