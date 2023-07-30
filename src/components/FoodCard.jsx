import React from 'react'
import { addToCart } from "../helper/CartSlice";
import { useDispatch } from 'react-redux';
import { IMAGE_CDN_URL } from '../helper/constants';
const FoodCard = ({data}) => {

    const dispatch = useDispatch();

    const handleAdd = ()=>{
      // dispatch(addToCart(data.card.info))
      dispatch(addToCart({
        name: data.card.info.name,
        price: data.card.info.price || data.card.info.defaultPrice,
        imageId: data.card.info?.imageId,
        quantity: data.card.info.inStock,
        id: data.card.info?.id,
        description: data.card.info?.description,
        category:data.card.info?.category
      }))
    }

  return (
    <div className='py-8 flex justify-between  border-b border-gray-300'>
        <div className='w-4/5'>
           <p className='border  border-green-500 w-5 h-5 text-center text-xs scale-75'>🟢</p> 
           <p className='font-semibold  text-gray-600'> {data.card.info.name} </p> 
           <p className='font-semibold text-sm text-gray-600 mb-4'>₹{(data.card.info.price)/100} </p> 
           <p className=' text-sm text-gray-400'> {data.card.info.description} </p>      
        </div>
        <div className='relative flex flex-col items-center'>
            <img className='w-32 h-auto rounded-lg self-center ' src={IMAGE_CDN_URL + data.card.info.imageId}/>
        <div className="absolute top-14 cursor-pointer  bg-white text-center text-sm font-medium text-green-600  m-2 w-20 p-1 shadow-lg rounded-md" onClick={()=>handleAdd()}>
                    ADD  
                </div>
        </div>

        </div>
  )
}

export default FoodCard