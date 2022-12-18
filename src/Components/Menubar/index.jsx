import './style.css';
import img from './Vector 54.png';
import React from 'react';
class Menubar extends React.Component {
    render() { 
        const {menuImg,title,price}=this.props;
        return ( 
            <div className='menu-bar'>
                <img src={menuImg} alt={title} />
                <div>
                    <h4>{title}</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <img src={img} alt="vector" />
                <span> Rs {price}</span>
            </div>
        );
    }
}

export default Menubar;