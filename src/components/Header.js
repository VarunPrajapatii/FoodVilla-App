import { useContext, useState } from "react";
import Logo from "../assets/img/foodvillalogo.png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";


Title = () => {
    return (
      <a href="/">
          <img
          className="h-28 p-2 "
          alt="logo"
          src={Logo}
          />
      </a>
    );
};

const Header = () => {
    const isOnline = useOnline();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-50 shadow-md">
            <Title />
            <div >
                <ul className="flex py-10">
                    
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/instamart">Instamart</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/cart">Cart - {cartItems.length} items</Link>
                    </li>
                </ul>
            </div>
            <span className="p-10 font-bold text-red-900">{user.name}</span>
            <h1>{isOnline ? "🟢" : "🔴"}</h1>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)} >Logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)} >Login</button>
            )}
            

        </div>
    );
};


export default Header;