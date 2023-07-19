import { useParams } from "react-router-dom"
import { IMAGE_CDN_URL } from "../helper/constants";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../helper/useRestaurantInfo";
import { addToCart } from "../helper/CartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetails = () => {

    const { resId } = useParams();
    const [restaurantInfo,menuData] = useRestaurantInfo(resId);
    const dispatch = useDispatch();


    return !restaurantInfo ? <Shimmer/> : <div className="flex gap-5">
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
                return <li key={card.card.info.id}>{card.card.info.name}  <button className="text-pink-100 search-btn m-2 p-1 bg-purple-600 rounded-md" onClick={()=>dispatch(addToCart(card.card.info))}>Add to cart</button></li>
            })}
        </div>
        </div>
    </div>
}

export default RestaurantDetails