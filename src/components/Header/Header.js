import { useState } from "react";
import Logo from "../../assets/logo.jpg"

export const Header = () => {
  const [loginBtn, setLoginBtn]= useState("Login")
    return (
      <div className="header">
        <div className="logo">
          <img className="img-logo" src={Logo} alt="logo"  />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=> loginBtn==="Login"? setLoginBtn("Logout"):setLoginBtn("Login")}>{loginBtn}</button>
          </ul>
        </div>
      </div>
    );
  };