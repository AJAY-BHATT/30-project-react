import React from 'react'
import './CreateAccount.css';
const CreateAccount = () => {
    
  return (
    <div className="Create-user">
            <h1>Create Account</h1>
             
            <input type="" name="name"   placeholder="Enter your Name"/>
            <input type="email" name="email"   placeholder="Enter your Email"/>
            <input type="password" name="password"   placeholder="Enter your Password"/>
            <div className='reminder'><input type='checkbox'/>Reminder Me</div>
            <div className="button" >Sign Up</div>
            <p>Already Have Account?<a href=''>Login</a></p>
        </div>
  )
}

export default CreateAccount