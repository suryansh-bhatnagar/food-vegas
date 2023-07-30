import { Link } from "react-router-dom";
import Logo from "../assets/img/food-logo.png"
import { useContext } from "react";
import UserContext from "../helper/UserContext";
import { useSelector } from "react-redux";

export const Title = () => (
    <div className='ml-2 '>
     <img src={Logo} alt="logo" className="h-20"/>
     <p className="text-white  font-serif mt-0 text-xs ">FOOD VEGAS</p>
    </div>
);



const Header = () => {

    const {user} = useContext(UserContext);

    const {items} = useSelector(store=>store.cart);
    console.log(items)
    return (
        <div className='flex justify-between items-center p-2 h-28   shadow-lg bg-gradient-to-r from-red-600 via-red-500 to-red-600'>
            <Title />
            <ul className='flex py-10 '>
                <li className="px-2 mx-4 font-semibold text-white hover:border-b hover:border-white">
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li className="px-2 mx-4 font-semibold text-white hover:border-b hover:border-white">
                    <Link to={'/about'}>
                        About
                    </Link>
                </li>
                <li className="px-2 mx-4 font-semibold text-white hover:border-b hover:border-white"> <Link to={'https://github.com/suryansh-bhatnagar'} target="_blank">
                    Contact
                </Link>
                </li>
                <li className="px-2 mx-4 font-semibold text-white hover:border-b hover:border-white"> <Link to={'/cart'}>
                    Cart - {items?.length}
                </Link>
                </li>
               
            </ul>
        </div>
    );
};



export default Header;