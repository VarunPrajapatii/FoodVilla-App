import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import React from "react";




const Body =  () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    //Were rendering filteredRestaurants then why is allRestaurants required then?  Its to search/ to filter
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState();

    useEffect(() => {
        getRestaurants();
    }, []);     // empty dependency array is useeffect will be called once after initial render only.

    console.log("render");

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(allRestaurants);
    }

    // const isOnline = useOnline();
    // if(!isOnline) {
    //     return <h1>🔴 Offline, Please check your Internet Connection!!</h1>
    // }

    if(!allRestaurants) return null;
    // if(filteredRestaurants?.length == 0)
    //     return <h1>No Restaurant matches your Search</h1>

    return (allRestaurants.length == 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input 
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button 
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >Search</button>
            </div>

            <div className="restaurant-list">
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