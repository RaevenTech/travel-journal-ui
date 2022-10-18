import React from "react";
import world from "../../assets/world.png";
import "./navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <img src={world} alt="world" height={30} />
                <p>my travel journal</p>
            </nav>
        </div>
    );
};

export default Navbar;
