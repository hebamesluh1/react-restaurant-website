import Container from "../container";
import React from "react";
import './style.css';
import Button from '../Button'
import logo from '../../assets/images/Group 27.png';
import insta from '../../assets/images/Social Icons.png';
import twitter from '../../assets/images/Social Icons (1).png';
import youtube from '../../assets/images/Social Icons (2).png';
import email from '../../assets/images/ant-design_mail-filled.png';
import phone from '../../assets/images/carbon_phone-filled.png';
import map from '../../assets/images/carbon_location-filled.png';
import msg from '../../assets/images/bytesize_mail.png';

class Footer extends React.Component {
    render() { 
        return (
            <div className="footer">
                {/* links  */}
                <div className="links">
                    <div>
                        <div className="head">
                            <img src={logo} alt="logo" className="logo"/><h3>Golden View Dine</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, iure</p>
                        <div className="social">
                            <img src={insta} alt="insta icon" />
                            <img src={twitter} alt="twitter icon" />
                            <img src={youtube} alt="youtube icon" />
                        </div>
                    </div>
                    <div>
                        <h4>Other Links</h4>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Blogs</li>
                            <li>Our Team</li>
                            <li>Our kitchen</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact Us</h4>
                        <ul className="contact">
                        <div><img src={email} alt="email" /><li>Gogreedineservic@gmail.com </li></div>
                        <div><img src={map} alt="address" /><li>AZ Complex Bylane3 Mandari Rd Mumbai 1100867 </li></div>
                            <div><img src={phone} alt="number phone" /><li>+1800287256</li></div>
                        </ul>
                    </div>
                </div>
                {/* forms */}
                <Container>
                    <div className="forms">
                        <p><img src={msg} alt="email" /> Subscribe To Our Newsletter </p>
                        <form>
                        <input type="email" placeholder="Your Email Id"/>
                        <Button>Subscribe</Button>
                        </form>
                    </div>
                </Container>

                {/* the end  */}
            
                <div className="copyright">
                <Container>
                    <p>CopyRight &copy; 2022 Golden Dine website</p>
                    <div>All rights reserved</div>
                </Container>
                </div>
            </div>
        );
    }
}
export default Footer;