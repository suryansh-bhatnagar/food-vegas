import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { reataurantList } from "../helper/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useIsOnline from "../helper/useIsOnline";;

const filterData = (keyword, restaurants) => {
    const data = restaurants.filter((restaurant) =>
        restaurant?.data?.name.toUpperCase().includes(keyword.toUpperCase())
    )
    return data;
}
const Body = () => {

    const [inputValue, setInputValue] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurants] = useState([]);

    const fetchRestaurants = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.62494&lng=79.8075272&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        const cardsData = json?.data?.cards.filter(
            (card) => { return card.cardType === "seeAllRestaurants" });
        setAllRestaurants(cardsData[0]?.data?.data?.cards);
        setFilteredRestaurants(cardsData[0]?.data?.data?.cards);

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
        <>
    
            <div className="my-5 mx-2 flex items-center justify-center p-2">
                <input type="text" className="p-2 focus:outline-none w-1/2 border border-gray-400 rounded-lg " placeholder="Search for restaurants" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className="text-pink-100 search-btn m-2 p-2 bg-purple-600 rounded-md" onClick={() => {

                    const data = filterData(inputValue, allRestaurants);
                    setFilteredRestaurants(data)
                }
                }>Search</button>
            </div>

            <div className='flex flex-wrap gap-3  justify-center m-2'>
                {filteredRestaurant?.length === 0 ? <h2>No result found</h2>
                    : filteredRestaurant?.map((restaurant) => {
                        return <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
                         <RestaurantCard {...restaurant.data} />
                        </Link>
                    }
                    )
                }
            </div>
        </>
    )
};

export default Body;