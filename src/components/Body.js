import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";



function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => 
        restaurant.info.name.includes(searchText)
    );
    // console.log(restaurants);
    return filterData;
};



const Body =() => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    return (
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
                        const data = filterData(searchText, restaurants);
                        setRestaurants(data);
                    }}
                >Search</button>
            </div>

            <div className="restaurant-list">
                    {
                        restaurants.map((restaurant) => {
                            return (
                                <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                            );
                            
                           {/*or you can pass restaurant as prop and you can destructure it
                            <RestaurantCard restaurnat={restaurantList[0].info}
                            or you can pass in like this too
                            <RestaurantCard name={restaurantList[0].info.name cuisines={restaurantList[0].info.name}}
                            or there are many ways.
                            We want to pass in all as props so we use spread operator */}
                        })
                    }
            </div>
        </>
        
    );
};

export default Body;