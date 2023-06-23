import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {reataurantList} from "./constants";

const Body = () => {

    const [inputValue ,setInputValue] = useState("");
    

    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Enter your search term" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button className="search-btn">Search</button>
            </div>
            <div>{inputValue}</div>
            <div className='restaurant-list-container'>
                {
                    reataurantList.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} />
                    }
                    )
                }
            </div>
        </>
    );
};

export default Body;