import Logo from "../../assets/logo.jpg"

export const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };