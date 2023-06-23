export const Title = () => (
    <div className='logo'>
        Food Vegas
    </div>
);

const Header = () => {
    return <div className='header-container'>
        <Title />
        <ul className='nav-items'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>;
};



export default Header;