import { useEffect, useState } from "react";
import { useParams, useResolvedPath } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    // this is how we read a dynamic URL params
    const param = useParams();
    const {resId} = param;


    const restaurant = useRestaurant(resId);

    return (!restaurant) ? <Shimmer /> :  (
        <div>
            <h1>Restaurant id: {restaurant?.id}</h1>
            <h2>{restaurant?.name}</h2>
            <img className="res-img" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            <h3>Area Name: {restaurant?.areaName}</h3>
            <h3>Average Rating: {restaurant?.avgRating} Stars</h3>
            <h3>City: {restaurant?.city}</h3>
            <h3>Cost: {restaurant?.costForTwoMessage}</h3>
            <h3>Locality: {restaurant?.locality}</h3>

        </div>
    );
};

export default RestaurantMenu;