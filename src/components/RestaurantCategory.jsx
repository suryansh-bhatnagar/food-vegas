import React, { useState } from 'react'
import FoodCard from './FoodCard';

const RestaurantCategory = ({data}) => {

    const [showItems, setShowItems] = useState(true);
  return (
    <div>
        <div className='flex justify-between px-4' onClick={()=>setShowItems(!showItems)}>
         <h2 className="font-bold text-gray-700 text-lg">
            {data.title} ({data.itemCards.length})
        </h2>
       {!showItems ? <span className='text-xl cursor-pointer' >⇓</span> :
        <span className='text-xl cursor-pointer' >⇑</span>}
        </div>
        <div className='px-4'>

        {showItems && data.itemCards.map((item)=><FoodCard data={item} key={item.id}/>)}
        </div>
        <div className='h-5 my-4 bg-gray-100'>

        </div>
     </div>
  )
}

export default RestaurantCategory