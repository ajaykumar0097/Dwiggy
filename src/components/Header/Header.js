import { useEffect, useState } from "react";
import Logo from "../../assets/logo.jpg"
import { Link } from "react-router-dom";
export const Header = () => {
  const [loginBtn, setLoginBtn]= useState("Login")
  console.log("header render");

  useEffect(()=> {
    console.log("useEffect called");
  },[loginBtn])
    return (
      <div className="header">
        <div className="logo">
          <Link to="/"><img className="img-logo" src={Logo} alt="logo"  /></Link>
        </div>
  
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="">Cart</Link></li>
            <button className="login" onClick={()=> loginBtn==="Login"? setLoginBtn("Logout"):setLoginBtn("Login")}>{loginBtn}</button>
          </ul>
        </div>
      </div>
    );
  };