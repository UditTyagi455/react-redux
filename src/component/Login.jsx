import React, { useState } from 'react'
import "./Login.css"
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";

const Login = () => {
  const [show ,setShow] = useState(false);
  return (
    <div className='main'>
       <div className='logindiv'>
        <h2 className='text-danger text-uppercase'>Login Credentials</h2>
         <input type="text" placeholder='Enter your username' />
         <div className='passwordicon'>
         <div className='iconclass'onClick={() => setShow(!show)}> {show ? <AiFillEye/> : <AiFillEyeInvisible/>} </div>
         <input type={show ? "text" : "password"} placeholder='Enter your Password' id='passinput'/>
         </div>
         <button className='btn btn-success'>Login</button>
       </div>
    </div>
  )
}

export default Login