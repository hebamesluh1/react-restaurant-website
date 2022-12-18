import React from "react";
import logo from './Group 27.png';
import search from './Vector (1).png';
import img from './Vector 2.png';
import './style.css';
class Header extends React.Component {
    render() { 
        return (
            <header>
                <div className="logo">
                <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">About US</a></li>
                        <li><a href="/#">Special</a></li>
                        <li><a href="/#">Menu</a></li>
                        <li><a href="/#">Blogs</a></li>
                        <li> <img src={search} alt="Search icon" /></li>
                    </ul>
                </div>
                <div className="button">
                    <button> <img src={img} alt="line"/>  Book Now <img src={img} alt="line"/></button>
                </div>
            </header>
        );
    }
}
export default Header;