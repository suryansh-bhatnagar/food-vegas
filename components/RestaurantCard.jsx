import { IMAGE_CDN_URL } from "./constants";

const RestaurantCard = ({name,image,cuisines,avgRating,deliveryTime,id,cloudinaryImageId}) => {
    console.warn(name,cloudinaryImageId,image,cuisines,avgRating,deliveryTime,id);
    console.warn(IMAGE_CDN_URL + cloudinaryImageId)
    return (
        <div className='card-container' key={id}>
            <img src={IMAGE_CDN_URL+ cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(" ,")}</h3>
            <h4>{avgRating} stars</h4>
            <h5>{deliveryTime} min</h5>

        </div>
    )
}

export default RestaurantCard;