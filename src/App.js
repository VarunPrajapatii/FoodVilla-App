import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error"
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import UserContext from "./utils/UserContext.js";



const Instamart = lazy(() => import("./components/Instamart.js"));
const About = lazy(() => import("./components/About.js"))


// Upon on Demand Loading -> upon render -> suspend loading (because code not there)...



const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Varun Prajapati  ",
        email: "varunprajapati123@gmail.com"
    });

    return (
        <>
            <UserContext.Provider 
                value={{
                    user:user,
                    setUser: setUser,
                }}
            >
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </>

    );
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback= {<h1>Loading....</h1>}>
                        <About />
                    </Suspense>
                ),
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    },
                ],
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback= {<h1>Loading....</h1>}>
                        <Instamart />
                    </Suspense>
                )
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);






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
