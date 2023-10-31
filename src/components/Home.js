import React from 'react'
import { Link } from 'react-router-dom'
import  "./Home.css"

const Home = () => {
  return (
    <div className='home' >
        <h1> CreateAccount Page</h1>
        <Link to="/createAccount">click</Link> <br/> <br/> <br/>
        <h1>Login Page</h1>
        <Link to="/login">click</Link><br/> <br/> <br/>
        <h2>Payment</h2>
        <Link to="/payment">click</Link><br/> <br/> <br/>
        <h1> ChoosePlan</h1>
        <Link to="/plan">click</Link><br/> <br/> <br/>
        <h1> QRCodeGenerator</h1>
        <Link to="/qr">click</Link><br/> <br/> <br/>
        <h1> QR</h1>
        <Link to="/qrcode">click</Link><br/> <br/> <br/>
        <h1> Fetch</h1>
        <Link to="/fetch">click</Link><br/> <br/> <br/>
        <h1>Search</h1>
        <Link to="/search">click</Link> <br/> <br/> <br/>
        <h1>BMI</h1>
        <Link to="/bmi">click</Link> <br/> <br/> <br/>

    </div>
  )
}

export default Home