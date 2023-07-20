import { IMAGE_CDN_URL } from "../helper/constants";
import { truncateString } from "../helper/utils";

const RestaurantCard = ({name,image,cuisines,avgRating,deliveryTime,id,cloudinaryImageId}) => {
    return (
        <div className='w-72 p-1 shadow-lg bg-pink-100' key={id}>
            <img src={IMAGE_CDN_URL+ cloudinaryImageId} />
            <h2 className="font-bold text-xl">{truncateString(name,25)}</h2>
            <h3>{truncateString(cuisines?.join(" ,"),30)}</h3>
            <h4>{avgRating} stars</h4>
            <h5>{deliveryTime} min</h5>

        </div>
    )
}

export default RestaurantCard;