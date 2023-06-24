import { useState ,useEffect} from "react"
import { FETCH_RESTAURANT_DETAILS_URL } from "./constants";


const useRestaurantInfo = (resId)=>{
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [menuData,setMenuData] = useState(null);


    const getRestaurantInfo = async () => {
        const data = await fetch(FETCH_RESTAURANT_DETAILS_URL+resId)

        const json = await data.json();
        console.log(json.data);
        setRestaurantInfo(json.data.cards[0].card.card.info)
        setMenuData(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card)
        // .cards[1].card.card.itemCards
    }


    useEffect(() => {
        getRestaurantInfo(resId);
    }, [])

    return [restaurantInfo,menuData];
}

export default useRestaurantInfo;