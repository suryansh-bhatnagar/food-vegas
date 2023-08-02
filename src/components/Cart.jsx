import { useDispatch, useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "../helper/constants";
import { clearCart, decrQuantity, incrQuantity, removeFromCart } from "../helper/CartSlice";
import { useEffect, useState } from "react";
import { truncateString } from "../helper/utils";
// import CartLogo from "../assets/img/cart-png.png"
import CartLogo from "../assets/img/cart.jpg"
import { Link } from "react-router-dom";

const Cart = () => {

  const cartItems = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

useEffect(()=>{
  setTotalAmount(cartItems.length ? cartItems?.reduce(function (x, y) {
    return x + y.quantity*(y.price)/100;
  }, 0):0)
},[cartItems])
  return cartItems.length === 0 ?
    <div className="m-2 flex flex-col items-center">
     <img src={CartLogo} className="h-96 my-6" alt="" />
      <h2 className="text-center text-2xl font-bold text-gray-700 my-4">Your cart is empty</h2>
      <h3 className="text-center text-lg">  You can go to home page to view more restaurants</h3>
      <Link to={'/'} className="bg-red-500 text-white p-4 rounded-xl my-4 font-bold shadow-xl" >See Restaurants </Link>
    </div>
    :
    <div className="m-2">
      <button className="text-pink-100 search-btn m-2 px-2 py-1 bg-red-600 rounded-md" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <div className=" flex gap-2 flex-wrap">

        {cartItems.map((item) => {
          return <div className='  w-48 shadow-lg rounded-t-lg pb-2' key={item.id}>
            <img className="rounded-t-xl" src={IMAGE_CDN_URL + item.imageId} />
            <h2 className="font-bold text-md pl-2 pb-2">{truncateString(item.name,15)}</h2>
            <div className="flex gap-2 pl-2 ">
            <span className="font-bold ">₹{(item.price) / 100}</span>
            <div className="border border-gray-400 w-fit">
            <button className="text-gray-500 font-bold  mx-2   rounded-md" onClick={()=> item?.quantity >= 2
              ? dispatch(decrQuantity(item))
              : dispatch(removeFromCart(item))}>-</button>
            <span>{item.quantity}</span>
            <button className="text-gray-500 font-bold mx-2   rounded-md" onClick={()=>dispatch(incrQuantity(item))}>+</button>
            </div></div>
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