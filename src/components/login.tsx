import { useState } from "react";
import "./login.css";
import loginImage from "../images/pablo-sign-in1.png";
import logoicon from "../images/Union.png";
import logoname from "../images/lendsqr.png";

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
          <img src={logoicon} alt="" className="logo"/>
          <img src={logoname} alt="" />
          <div className="pic">
            <img src={loginImage} alt="" />
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
