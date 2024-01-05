import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body =() => {
    return (
        <div className="restaurant-list">
            {
                restaurantList.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                    
                    {/*or you can pass restaurant as prop and you can destructure it
                      <RestaurantCard restaurnat={restaurantList[0].info}
                      or you can pass in like this too
                      <RestaurantCard name={restaurantList[0].info.name cuisines={restaurantList[0].info.name}}
                      or there are many ways.
                      We want to pass in all as props so we use spread operator */}
                })
            }

        </div>
    );
};

export default Body;