import { IMG_CDN_URL } from "../constants"

const RestaurantCard = ({
    name, 
    cuisines, 
    areaName, 
    cloudinaryImageId
    }) => {
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-white rounded-md">
            <img src= {IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-2xl">{name}</h2>
            <h3 className="font-semibold">{cuisines.join(", ")}</h3>
            <h4>{areaName}</h4>
        </div>
    );
};

export default RestaurantCard;
