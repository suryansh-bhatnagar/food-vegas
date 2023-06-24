import { Link } from "react-router-dom";
import Logo from "../assets/img/food_vegas_logo.png"

export const Title = () => (
    <div className='logo'>
     <img src={Logo} alt="logo" className="h-24 p-2"/>
    </div>
);

const Header = () => {
    return (
        <div className='flex justify-between p-2 m-2 bg-pink-100 shadow-lg'>
            <Title />
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
                <li className="px-2"> <Link to={'/instamart'}>
                    Instamart
                </Link>
                </li>
            </ul>
        </div>
    );
};



export default Header;