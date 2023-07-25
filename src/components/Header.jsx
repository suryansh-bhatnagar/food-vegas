import { Link } from "react-router-dom";
import Logo from "../assets/img/food_vegas_logo.png"
import { useContext } from "react";
import UserContext from "../helper/UserContext";
import { useSelector } from "react-redux";

export const Title = () => (
    <div className='logo'>
     <img src={Logo} alt="logo" className="h-16 p-2"/>
    </div>
);

const Header = () => {

    const {user} = useContext(UserContext);

    const {items} = useSelector(store=>store.cart);
    console.log(items)
    return (
        <div className='flex justify-between items-center p-2 h-20  bg-white shadow-lg'>
            <Title />
            <span className="text-xl font-bold">{user.name} - {user.email}</span>
            <ul className='flex py-10 '>
                <li className="px-2">
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li className="px-2">
                    <Link to={'/about'}>
                        About
                    </Link>
                </li>
                <li className="px-2"> <Link to={'/contact'}>
                    Contact
                </Link>
                </li>
                <li className="px-2"> <Link to={'/cart'}>
                    Cart - {items?.length}
                </Link>
                </li>
                <li className="px-2"> <Link to={'/instamart'}>
                    Instamart
                </Link>
                </li>
            </ul>
        </div>
    );
};



export default Header;