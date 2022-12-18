import React from "react";
import './style.css';
import Hero from "../Sections/Hero";
import About from "../Sections/About";
import Special from "../Sections/Special";
import Menu from "../Sections/Menu";
import Footer from "../Components/Footer";
import Blogs from "../Sections/Blogs";
import Feedback from './../Sections/Review/index';
class Home extends React.Component {
    render() { 
        return ( 
            <div className="home">
                <Hero />
                <div className="content">
                    <About />
                    <Special />
                    <Menu />
                    <Feedback />
                    <Blogs />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;