import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {  restaurant_data} from "../helper/constants";
import Shimmer from "./Shimmers/Shimmer";
import { Link } from "react-router-dom";
import useIsOnline from "../helper/useIsOnline";;

const filterData = (keyword, restaurants) => {
    const data = restaurants.filter((restaurant) =>
        restaurant?.info?.name.toUpperCase().includes(keyword.toUpperCase())
    )
    return data;
}
const Body = () => {

    const [inputValue, setInputValue] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurants] = useState([]);

    const fetchRestaurants = async () => {

        setAllRestaurants(restaurant_data);
        setFilteredRestaurants(restaurant_data);

    }

    useEffect(() => {
        fetchRestaurants()
    }, [])

    console.log(allRestaurants)

    const isOnline = useIsOnline();

    if(!isOnline){
        return <h2>🔴 You went offline</h2>
    }
// return <Shimmer/>
    return allRestaurants?.length === 0 ? (
        <Shimmer/>
      
    ) : (
        <div className="mb-10">
    
            <div className="my-5 mx-2 flex items-center justify-center p-2">
                <input type="text" className="p-2 focus:outline-none w-1/2 border border-gray-400 rounded-lg " placeholder="Search for restaurants" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className="text-pink-100 search-btn m-2 p-2 bg-red-600 rounded-md" onClick={() => {

                    const data = filterData(inputValue, allRestaurants);
                    setFilteredRestaurants(data)
                }
                }>Search</button>
            </div>

            <div className='flex flex-wrap gap-3  justify-center m-2'>
                {filteredRestaurant?.length === 0 ? <div className="h-96">
                    <img className="h-96" src="https://elfegnie.adc.com.et/elfegnie_web/assets/img/no_rest_found.png" alt="no results" />
                </div>
                    : filteredRestaurant?.map((restaurant,index) => {
                        return <Link to={"/restaurant/"+restaurant.info.id} key={index}>
                        <RestaurantCard {...restaurant.info} />
                       </Link>
                    }
                    )
                }
            </div>
        </div>
    )
};

export default Body;