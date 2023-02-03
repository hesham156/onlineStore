import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {GoogleLogin} from '@leecheuk/react-google-login'


const Login = () => {
  const responseGoogle = (response) => {
     console.log(response)
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