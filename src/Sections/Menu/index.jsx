import './style.css';
import React from 'react';
import Title from '../../Components/Title';
import Button from '../../Components/Button';
import Menubar from '../../Components/Menubar';
import img from '../../assets/images/hcmp33562_1459402.png';
import Container from '../../Components/container';
import comp from '../../assets/images/Component 4.png';
import rec from '../../assets/images/Rectangle 34.png';
import Frames from './../../Components/Frame';
import dishes from './../../assets/images/dish 1.png';
import chef from './../../assets/images/chef (1) 1.png';
import team from './../../assets/images/team 1.png';
import img2 from './../../assets/images/unsplash_ThLVnKdeH1k.png';
import img3 from './../../assets/images/hcmp76303_1094626.png';
import img4 from './../../assets/images/DirtCandy-0242.png';
import img5 from './../../assets/images/unsplash_sHG1dCUXgPY.png';
import img6 from './../../assets/images/unsplash_50KffXbjIOg.png';

class Menu extends React.Component {
    render() { 
        return (
            <div className="menu">
                <Container>
                    <Title
                        title='Straight from kitchen'
                        subtitle='our menu'
                        />
                    <div className="flex-menu">
                    <div>
                    <Menubar
                    menuImg={img}
                    title="Lorem ipsum dolor sit amet."
                    price='222'/>
                    <Menubar
                    menuImg={img2}
                    title="Lorem ipsum dolor sit amet."
                    price='590'/>
                    <Menubar
                    menuImg={img3}
                    title="Lorem ipsum dolor sit amet."
                    price='130'/>
                    <Menubar
                    menuImg={img4}
                    title="Lorem ipsum dolor sit amet."
                    price='135'/>
                    <Menubar
                    menuImg={img5}
                    title="Lorem ipsum dolor sit amet."
                    price='148'/>
                    <Menubar
                    menuImg={img6}
                    title="Lorem ipsum dolor sit amet."
                    price='200'/>
                    </div>
                    <div>
                    <Menubar
                    menuImg={img5}
                    title="Lorem ipsum dolor sit amet."
                    price='148'/>
                    <Menubar
                    menuImg={img6}
                    title="Lorem ipsum dolor sit amet."
                    price='135'/>
                    <Menubar
                    menuImg={img4}
                    title="Lorem ipsum dolor sit amet."
                    price='590'/>
                    <Menubar
                    menuImg={img}
                    title="Lorem ipsum dolor sit amet."
                    price='222'/>
                    <Menubar
                    menuImg={img2}
                    title="Lorem ipsum dolor sit amet."
                    price='200'/>
                    <Menubar
                    menuImg={img3}
                    title="Lorem ipsum dolor sit amet."
                    price='230'/>
                    </div>
                    </div>
                </Container>

                <div className="ad">
                    <Container>
                        <div className='ad-sec'>
                            <img src={comp} alt="design" />
                            <div>
                                <h2>Come join us for a lunch this weekend and enjoy</h2>
                                <p>Flat 10% off</p>
                                <Button>Book Table</Button>
                            </div>
                            <img src={comp} alt="design" />
                        </div>
                    </Container>
                </div>

                <Container>
                <div className="cooking-part">
                    <div>
                        <Title 
                        title='Cooking ingredients'
                        subtitle='What Goes In'>
                        </Title>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.</p>

                        <Button>Read more</Button>
                    </div>
                    <div>
                        <img src={rec} alt="img" />
                    </div>
            </div>
                </Container>

                <div className="parts">
                    <Container>
                        <div className="p-1">
                            <Frames num="250" title="Delicacy" img={dishes}/>
                            <Frames num="10" title="Renowed Chefs" img={chef}/>
                            <Frames num="30" title="Members" img={team}/>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Menu;