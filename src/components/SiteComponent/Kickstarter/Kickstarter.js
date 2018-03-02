import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux';
import kickstarterThumb from '../../../assets/images/kickstarterThumb.jpg';
import arrow from '../../../assets/images/arrow.svg';

//Props have to be passed into function for props to work
const kickstarter = () => (
    <Aux>
        <div className="contentContainer">
            <div  className="siteThumbnail">
                <img src={ kickstarterThumb } alt="Board Buddies Kickstarter Professional" />
            </div>        
            <div className="workTextContainer">
                <h3>Board Buddies - Kickstarter</h3>
                <h5>Marketing, Logo Design, Video</h5>
                <p>A brief description possibly -  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <a className="c2A" href='vfx.michaelside.com'>
            Check It Out
        </a>
        <Link to='/work/kalibo' exact>
            <img src={arrow} className="navArrow" alt="page navigation button" />
        </Link>
    </Aux>
);

export default kickstarter;