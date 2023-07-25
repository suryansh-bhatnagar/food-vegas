import { IMAGE_CDN_URL } from "../helper/constants";
import { truncateString } from "../helper/utils";

const RestaurantCard = ({name,image,cuisines,avgRating,deliveryTime,id,cloudinaryImageId}) => {
    return (
        <div className='w-72 hover:scale-95 rounded-t-lg  shadow-lg ' key={id}>
            <div className="px-4 py-2">
            <img className="rounded-xl" src={IMAGE_CDN_URL+ cloudinaryImageId} />
            <h2 className="font-bold text-xl">{truncateString(name,20)}</h2>
            <h4 className="text-lg">🌟<span className="text-lg font-medium">{avgRating}</span>  </h4>
            <h3 className="text-lg text-gray-500">{truncateString(cuisines?.join(" ,"),30)}</h3>
            <h5 className="text-lg text-gray-500">{deliveryTime} min</h5>

            </div>

        </div>
    )
}

export default RestaurantCard;