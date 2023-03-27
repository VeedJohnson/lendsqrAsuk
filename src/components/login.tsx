import React, { Fragment } from "react";
import { useState } from "react";
import "./login.css";


const LoginForm = () => {
  const MyFun = () => {
    alert(`welcome`);
  };
  const [username, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(username);
    
  };
  
  return (
    <>
      <div className="logincontainer">
        <div>
          <h2 className="logo">lendsqr</h2>
          <div className="pic">
            <img src="./images/pablo-sign-in1.png" alt="" />
          </div>
        </div>
        
          <form action="" className="form" onSubmit={handleSubmit}>
          <h2 id="welcome">Welcome!</h2>
          <p>Enter details of login</p>

          <input
            value={username}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="username"
          />
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            name=""
            placeholder="password"
          />
          <a href="">forgot password</a>
          <button type="submit" onClick={MyFun}>
            Login
          </button>
          </form>
        </div>
      
    </>
  );
};

export default LoginForm;
