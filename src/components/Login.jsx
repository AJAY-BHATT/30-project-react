import React from 'react'
import './Login.css';
const Login = () => {
    
  return (
    <div className="login">
            <h1>Login to Your Account</h1>
            
            <input type="email" name="email"   placeholder="Enter your Email"/>
            <input type="password" name="password"   placeholder="Enter your Password"/>
            <div className='reminder'><input type='checkbox'/>Reminder Me</div>
            <div className="button" >Login</div>
            <p>New to MyApp?<a href=''>Sign Up</a></p>
        </div>
  )
}

export default Login;