import { Fragment } from "react";
import "./login.css"

const LoginForm = () => {
    return (
        <div className="logincontainer">
            <div>
            <h2 >lendsqr</h2>
            </div>
            <div className="form">
                <h2 id="welcome">Welcome!</h2>
                <p>Enter details of login</p>

                <input type="text" placeholder="username" />
                <input type="password" name="" id="" placeholder="password" />
                <a href="">forgot password</a>
                <button>Login</button>
            </div>
        </div>
    )
};

export default LoginForm;