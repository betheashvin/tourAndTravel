import { useState } from "react";
import { MenuItems } from "./MenuItem";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

function Navbar() {
   const [clicked, setClicked] = useState(false);

   const handleClick = () => {
    setClicked(!clicked);

   };

   return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className = {clicked ? "nav-menu-active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className = {item.cName} to={item.url}>
                        <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>
                );
            })}
            <Link to="/signup">
            <button> Sign Up </button>
            </Link>
        </ul>
        </nav>
   );
}

export default Navbar;

