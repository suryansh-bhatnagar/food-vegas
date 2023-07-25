import { useState ,useEffect} from "react"
import { FETCH_RESTAURANT_DETAILS_URL } from "./constants";


const useRestaurantInfo = (resId)=>{
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [menuData,setMenuData] = useState(null);
    const [data, setData] = useState(null)


    const getRestaurantInfo = async () => {
        const data = await fetch(FETCH_RESTAURANT_DETAILS_URL+resId)

        const json = await data.json();
        console.log(json.data);
        setData(json.data)
        setRestaurantInfo(json.data.cards[0].card.card.info)
        setMenuData(json.data.cards[json.data.cards.length-1].groupedCard.cardGroupMap.REGULAR.cards[1].card.card)
    }


    useEffect(() => {
        getRestaurantInfo(resId);
    }, [])

    return [restaurantInfo,menuData,data];
}

export default useRestaurantInfo;