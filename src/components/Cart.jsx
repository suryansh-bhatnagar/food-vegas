import { useDispatch, useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "../helper/constants";
import { clearCart, removeFromCart } from "../helper/CartSlice";
import { useEffect, useState } from "react";

const Cart = () => {

  const cartItems = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

useEffect(()=>{
  setTotalAmount(cartItems.length ? cartItems?.reduce(function (x, y) {
    return x + (y.price)/100;
  }, 0):0)
},[cartItems])
// let sum =  

// console.log("Summation",sum);
 
  // const calculateBillAmount = ()=> cartItems.reduce((sum,val)=>sum+val) ;
  return cartItems.length === 0 ?
    <div className="m-2">
      <h2 className="text-center">Your cart is empty</h2>
      <h3 className="text-center">  You can go to home page to view more restaurantst</h3>
    </div>
    :
    <div className="m-2">
      <button className="text-pink-100 search-btn m-2 px-2 py-1 bg-red-600 rounded-md" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <div className=" flex gap-2">

        {cartItems.map((item) => {
          return <div className=' p-1 w-48 shadow-lg bg-pink-100' key={item.id}>
            <img src={IMAGE_CDN_URL + item.imageId} />
            <h2 className="font-bold text-xl p-1">{item.name}</h2>
            <span className="font-bold p-1">₹{(item.price) / 100}</span>
            <button className="text-pink-100 search-btn m-2 p-1 bg-purple-600 rounded-md" onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        }
        )}
      </div>

      <div>
        <br />
        <hr />
      <h2 className="font-bold text-xl p-1 text-gray-500">Bill Details</h2>
    <h3 className=" font-bold text-xl">  Total Amount to be paid : ₹{totalAmount}</h3>
      </div>
    </div>
}

export default Cart;