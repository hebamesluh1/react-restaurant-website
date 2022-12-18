import React from "react";
import './style.css';
import Header from './../../Components/Header';
import Button from './../../Components/Button';
class Hero extends React.Component {
    render() { 
        return (
            <section className="hero">
                <div className="hero-header">
                <Header />
                </div>
                <div className="hero-content">
                    <h1>Welcome To Golden View Dine</h1>
                    <p>Explore the authentic vegan dishes with your friends and family </p>
                    <Button>Read more</Button>
                </div>
            </section>
        );
    }
}

export default Hero;