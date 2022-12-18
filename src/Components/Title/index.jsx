import React from "react";
import './style.css';
class Title extends React.Component {
    render() { 
        return ( 
            <div className="title">
                <h2>{this.props.title}</h2>
                <h3>{this.props.subtitle}</h3>
            </div>
        );
    }
}

export default Title;