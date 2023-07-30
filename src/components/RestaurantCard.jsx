import { IMAGE_CDN_URL } from "../helper/constants";
import { truncateString } from "../helper/utils";
const RestaurantCard = ({name,image,cuisines,avgRating,deliveryTime,id,cloudinaryImageId}) => {
    return (
        <div className='w-72 hover:scale-95 rounded-t-lg  shadow-lg' key={id}>
         
            <img className="rounded-t-xl" src={IMAGE_CDN_URL+ cloudinaryImageId} />
            <h2 className="font-bold text-xl">{truncateString(name,20)}</h2>
            <h4 className="text-md">🌟<span className="text-lg font-medium">{avgRating}</span>  </h4>
            <h3 className="text-md text-gray-500">{truncateString(cuisines?.join(" ,"),30)}</h3>
            <h5 className="text-md text-gray-500">{deliveryTime} min</h5>

   
        </div>
    )
}
export default RestaurantCard;