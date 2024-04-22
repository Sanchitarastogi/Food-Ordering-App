import { restaurantList } from "../../utils/mockData";
import { RestaurantCard } from "./RestaurantCard";

export const Card = () => {
  return (
    <div className="card">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
      ))}
    </div>
  );
};
