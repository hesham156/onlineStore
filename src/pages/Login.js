import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {GoogleLogin} from '@leecheuk/react-google-login'
import { useNavigate } from 'react-router-dom'


const Login = ({redirect ,path}) => {
  const goTo = useNavigate()
  const responseGoogle = (response) => {
    localStorage.removeItem('admin')
    localStorage.setItem('admin',JSON.stringify(response))
    toast.success("Login")
    goTo(redirect,{replace:true})
    window.location.reload()
  }
  return (
    <div className='login' >
      
              ccc
              <div>
        <GoogleLogin
    clientId= "377316420785-rkcjm8tut58icdbkenblo56oqqra54re.apps.googleusercontent.com"
    buttonText=""
    onSuccess={responseGoogle}
    
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}

  
  />
  </div>
    </div>
  )

} 

export default Login