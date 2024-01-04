import React from "react";
import ReactDOM from "react-dom/client";



/**
    Header
    - Logo
    - Nav Items(Right Side)
    - Cart
    Body
    - Search Bar
    - RestrauntList
        - RestaurantCard (many cards)
         - Image
         - Name
         - Rating
         - Cusines
    Footer 
    - Links
    - Copyrights
*/

const Title = () => {
    return (
        <h1 id="title" >
            Food Villa
        </h1>
    )
    
}

const Header = () => {
    return (
        <div>
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const root = document.getElementById("root");

root.render(<Header />);