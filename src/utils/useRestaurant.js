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
        const jsonData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setRestaurant(jsonData);
        // console.log(jsonData);  // this will give the list of menu items
    }
    return restaurant;
};

export default useRestaurant;