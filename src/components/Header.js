import { useState } from "react";
import Logo from "../assets/img/foodvillalogo.png"
import { Link } from "react-router-dom";


Title = () => {
    return (
      <a href="/">
          <img
          className="logo"
          alt="logo"
          src={Logo}
          />
      </a>
    );
};

const Header = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>

            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)} >Logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)} >Login</button>
            )}
            

        </div>
    );
};


export default Header;