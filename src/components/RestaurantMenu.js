import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    // this is how we read a dynamic URL params
    const param = useParams();
    const {id} = param;
    const [restaurant, setRestaurant] = useState({});


    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo () {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=84070");
        const json = await data.json();
        const jsonData = json?.data?.cards[0]?.card?.card?.info;
        console.log(json);
        console.log(jsonData?.name);
        console.log(jsonData?.id);
        setRestaurant(jsonData);
    }

    return (!restaurant) ? <Shimmer /> :  (
        <div>
            <h1>Restaurant id: {restaurant.id}</h1>
            <h2>{restaurant.name}</h2>
            <img className="res-img" src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
            <h3>Area Name: {restaurant.areaName}</h3>
            <h3>Average Rating: {restaurant.avgRating} Stars</h3>
            <h3>City: {restaurant.city}</h3>
            <h3>Cost: {restaurant.costForTwoMessage}</h3>
            <h3>Locality: {restaurant.locality}</h3>

        </div>
    );
};

export default RestaurantMenu;