import React from 'react'
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import CreatePayment from './components/CompletePayment';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';

import RechargePlan from './components/RechargePlan';
import QRCodeGenerator from './components/QRCodeGenerator';
import QR from './components/QR';
import Fetch from './components/Fetch'
import Search from './components/Search';
import BMI from './components/BMI';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<CreatePayment />} />
      
      <Route path="/plan" element={<RechargePlan/>} />
      <Route path="/qr" element={<QRCodeGenerator/>} />
      <Route path="/qrcode" element={<QR/>} />
      <Route path="/fetch" element={<Fetch/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/bmi' element={<BMI/>} />


      </Routes>
    </Router>
    
  )
}

export default App