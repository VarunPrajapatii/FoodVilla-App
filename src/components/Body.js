import { useEffect, useState, useContext } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import React from "react";
import UserContext from "../utils/UserContext";



const Body =  () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    //Were rendering filteredRestaurants then why is allRestaurants required then?  Its to search/ to filter
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState();
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        getRestaurants();
    }, []);     // empty dependency array is useeffect will be called once after initial render only.

    console.log("render");

    async function getRestaurants() {
        const data = await fetch("http://localhost:3001/api/restaurants")
;
        const json = await data.json();
        console.log("Varun", json);
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const isOnline = useOnline();
    if(!isOnline) {
        return <h1>🔴 Offline, Please check your Internet Connection!!</h1>
    }

    if(!allRestaurants) return null;
    if(filteredRestaurants?.length == 0)
        return <h1>No Restaurant matches your Search</h1>

    return (allRestaurants.length == 0) ? <Shimmer /> : (
        <>
            <div className="bg-pink-50 p-5 my-5">
                <input 
                    type="text"
                    className="focus:bg-pink-100"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button 
                    className="p-2 m-2 bg-purple-700 hover:bg-purple-500 text-white rounded-xl"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >Search</button>
                <input 
                    value={user.name} 
                    onChange={
                        e => setUser({
                            ...user,
                            name: e.target.value,                            
                        })
                    }
                />
                <input 
                    value={user.email} 
                    onChange={
                        e => setUser({
                            ...user,
                            email: e.target.value,
                        })
                }
                />
            </div>

            <div className="flex flex-wrap bg-pink-50 ">
                {/* You have to write logic for no restaurant found here */}
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link to={"restaurant/" + restaurant.info.id} >
                            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                        </Link>
                    );                            
                    {/*or you can pass restaurant as prop and you can destructure it
                     <RestaurantCard restaurnat={restaurantList[0].info}
                     or you can pass in like this too
                     <RestaurantCard name={restaurantList[0].info.name cuisines={restaurantList[0].info.name}}
                     or there are many ways.
                     We want to pass in all as props so we use spread operator */}
                })}
            </div>
        </>
        
    );
};

export default Body;