import React,{useState} from 'react'
import { HashLink as Link } from "react-router-hash-link";
import login from '../../assets/login.png'
import "./Sign.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div id="login" className='authenPage'>
        
     
        <form className="formSign">
          <h1 className="sign-title">Sign in for free</h1>
          <div className="btnGroup">
            <button className="facebook" >
            <i class="fa-brands fa-facebook-f"></i>
            </button>
            <button className="google">
            <i class="fa-brands fa-google"></i>
            </button>
          </div>
          <h3>Sign in with your email address</h3>

          <div className="inputsSign">
            <div className="inputBox">
              <input
                className="email1"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              required/>
              <label>Email</label>
             
            </div>

            <div className="inputBox">
              <input
                className="password1"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required />
              <label>Password</label>
              {/* <small className="errorMessage"><i class="fa-solid fa-circle-exclamation"></i></small> */}
            </div>
          </div>

          <div className="btnSignGroup">
            <button className="sign" type="submit">
              Sign In
            </button>
            <p className="linked">
              Don't have an account{" "}
              <Link to="/Signup">
                Sign up
              </Link>{" "}
            </p>
            {/* <button className="sign" >
        <span className="text">Register</span>
        </button> */}
          </div>
        </form>
        <img src={login} alt="" srcset="" />
        {/* <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover/> */}
      </div>
    
  )
}

export default Login