import React, { useState } from "react";
export default function Thirteen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuthenication= ()=>{
    if(isRegistered){
        //Login
        if(isRegistered){
          if(isRegistered){
            const user = users.find((u)=> u.email === email && u.password === password);
            if(user){
              setIsLoggedIn(true);

            }else{
              alert('Login Failded please check your credential')
            }
          }
        }
    }else{
        //Register
        const newUser = {email, password};
        setUsers([...users, newUser]);
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        setIsLoggedIn(true);
    }
  }
  const handleLogout = () =>{
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');

  }
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <button onClick={handleLogout}> Logout</button>
        </div>
      ) : (
        <div>

        <h2>{isRegistered ? 'Login' : 'Register'} </h2>
          <form>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthenication}>{isRegistered ? "Login" : "Register"}</button>
          </form>
          <p>
            {isRegistered
              ? "Don't have an account ? Register Now"
              : "Already have an Account ? Log in"}
            <button onClick={() => setIsRegistered(!isRegistered)}>
              {isRegistered ? "Register" : "Login"}
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
