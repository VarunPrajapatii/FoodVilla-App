import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo () {
        const data = await fetch(FETCH_MENU_URL + resId);
        const json = await data.json();
        const jsonData = json?.data?.cards[0]?.card?.card?.info;
        setRestaurant(jsonData);
    }
    return restaurant;
};

export default useRestaurant;