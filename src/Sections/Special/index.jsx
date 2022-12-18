import React from "react";
import Title from '../../Components/Title'
import './style.css';
import Container from './../../Components/container';
import Card from '../../Components/Card'
import OrangeJuice from '../../assets/images/orange-juice (1) 1.png';
import Chef from '../../assets/images/chef 2.png';
import Diches from '../../assets/images/restaurant 1.png';
class Special extends React.Component {
    render() { 
        return ( 
            <div className="special">
                <Container>
                    <Title 
                        title='Special'
                        subtitle='What Makes us special'/>
                    <div className="cards">
                        <Card title="Fresh Food" imgSrc={OrangeJuice}/>
                        <Card title="Skilled Chef" imgSrc={Chef}/>
                        <Card title="Exotic Dishes" imgSrc={Diches}/>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Special;