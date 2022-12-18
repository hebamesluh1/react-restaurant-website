import './style.css';
import React from 'react';
class Frames extends React.Component {
    render() { 
        const {img , title , num }=this.props;
        return ( 
            <div className='part'>
                <img src={img} alt={title} />
                <div>+
                    {num}
                    <span>
                    {title} 
                    </span>
                </div>
            </div>
        );
    }
}
export default Frames;