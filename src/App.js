import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";



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


const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);