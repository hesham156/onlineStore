import React, { useEffect, useState } from 'react'
import Body from './Body'
import SideNave from './commponent/SideNave'
import './asset/css/side.css'
import './asset/css/dash.css'
import './asset/css/body.css'
import Login from '../pages/Login'
const Index = () => {
  const [admin,setAdmin]=useState([])
  useEffect(()=>{
    setAdmin(JSON.parse(localStorage.getItem('admin'))||"dd")
    
  },[])
  return (
    <>
    {admin!=="dd"?
    <div className='dashboard'>
        <SideNave/>
        <Body/>
    </div>:<Login redirect="/admin/customer" path={document.location.pathname}/>}
    </>
  )
}

export default Index