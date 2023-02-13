import logo from "../assets/Logo.svg"
import icon from "../assets/icons.svg"
import basket from "../assets/Basket.svg"
const Header = () => {
    return (
        <>
            <div>
                <img src={logo} alt={logo} />
            </div>
            <div className="nav">
                <img src={icon} alt="icon" />
                <img src={basket} alt="basket" />
            </div>
        </>
    );
}

export default Header;