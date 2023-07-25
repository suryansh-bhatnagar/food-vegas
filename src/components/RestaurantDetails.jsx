import { useParams } from "react-router-dom"
import { IMAGE_CDN_URL } from "../helper/constants";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../helper/useRestaurantInfo";
import { truncateString } from "../helper/utils";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantDetails = () => {

    const { resId } = useParams();
    const [restaurantInfo,menuData,data] = useRestaurantInfo(resId);
    console.log("MENU DATA: ", menuData)
    console.log("Restaurant info",restaurantInfo)
    console.log(" data ",data)

    const i = 2;

    const categories = data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log("Category data ",categories);


    return !restaurantInfo ? <Shimmer/> : <div className="flex flex-col mx-auto   px-5 lg:w-3/5 gap-5">
        <section className="flex justify-between w-full bg-black rounded-b-md p-4">
            <div>
                <h1 className="font-bold text-lg text-white mb-2">{restaurantInfo.name}</h1>
                <h3 className="text-sm text-white">{truncateString(restaurantInfo.cuisines?.join(" ,"),30)}</h3>
                <h3 className= "text-sm text-white ">{restaurantInfo.areaName}</h3>
                <div className=" text-white text-sm mb-4  ">
                    ⭐ {restaurantInfo.avgRating} |   {restaurantInfo.totalRatingsString}
                </div>
                <h3 className="text-sm text-white">🚴{restaurantInfo.expectationNotifiers[0].text}</h3>
            
            </div>
             <div className="hidden md:block">
                <img className="w-48 rounded-lg " src={IMAGE_CDN_URL + restaurantInfo.cloudinaryImageId} alt="restaurant"/>
            </div>
        </section>
        <div className="border-b border-gray-300 w-full"></div>
        <div>
        <div>
            {
                categories?.map((category,index)=><RestaurantCategory
                   key={index} 
                   data={category.card.card}
                  
                   />)
            }
        </div>
        </div>
    </div>
}

export default RestaurantDetails