import { useParams } from "react-router-dom"
import { IMAGE_CDN_URL } from "../helper/constants";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../helper/useRestaurantInfo";

const RestaurantDetails = () => {

    const { resId } = useParams();
    const [restaurantInfo,menuData] = useRestaurantInfo(resId)


    return !restaurantInfo ? <Shimmer/> : <div className="restaurant-info-container">
        <div>
        <h1>
            {restaurantInfo.name}
        </h1>
            <img src={IMAGE_CDN_URL + restaurantInfo.cloudinaryImageId} />
            <h3>{restaurantInfo.area}</h3>
            <h3>{restaurantInfo.city}</h3>
            <h3>{restaurantInfo.avgRating}</h3>
            <h3>{restaurantInfo.costForTwoMessage}</h3>
        </div>
     
        <div>
        <h2>
            {menuData.title}
        </h2>
        <br/>
        <div>

            {menuData?.itemCards?.map((card) => {
                return <li>{card.card.info.name}</li>
            })}
        </div>
        </div>
    </div>
}

export default RestaurantDetails