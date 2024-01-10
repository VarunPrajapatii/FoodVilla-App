import { useEffect, useState } from "react";
import { useParams, useResolvedPath } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";

const RestaurantMenu = () => {
    // this is how we read a dynamic URL params
    const param = useParams();
    const {resId} = param;

    const isOnline = useOnline();

    const restaurant = useRestaurant(resId);

    if(!isOnline) {
        return <h1>🔴 Offline, Please check your Internet Connection!!</h1>
    }
    return (!restaurant) ? <Shimmer /> :  (
        <div>
            <h1 className="font-bold">Restaurant id: {restaurant?.id}</h1>
            <h2 className="text-4xl font-semibold ">{restaurant?.name}</h2>
            <img className="w-96" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            <h3>Area Name: {restaurant?.areaName}</h3>
            <h3>Average Rating: {restaurant?.avgRating} Stars</h3>
            <h3>City: {restaurant?.city}</h3>
            <h3>Cost: {restaurant?.costForTwoMessage}</h3>
            <h3>Locality: {restaurant?.locality}</h3>

        </div>
    );
};

export default RestaurantMenu;