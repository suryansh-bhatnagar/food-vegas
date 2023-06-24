import { IMAGE_CDN_URL } from "../helper/constants";

const RestaurantCard = ({name,image,cuisines,avgRating,deliveryTime,id,cloudinaryImageId}) => {
    return (
        <div className='w-48 shadow-lg bg-pink-100' key={id}>
            <img src={IMAGE_CDN_URL+ cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines?.join(" ,")}</h3>
            <h4>{avgRating} stars</h4>
            <h5>{deliveryTime} min</h5>

        </div>
    )
}

export default RestaurantCard;