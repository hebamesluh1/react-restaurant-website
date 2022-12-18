import './style.css';
import React from 'react';
class Card extends React.Component {
    render() { 
        const {title , imgSrc}=this.props;
        return (
            <div className="card">
                <div className="box">
                <img src={imgSrc} alt={title} />
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum itaque accusamus vel quia tempora earum, veritatis amet dolores officia?</p>
                </div>
            </div>
        );
    }
}
export default Card;