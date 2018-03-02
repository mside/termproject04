import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux';
import mauroThumb from '../../../assets/images/mauroThumb.jpg';
import arrow from '../../../assets/images/arrow.svg';

//Props have to be passed into function for props to work
const mauro = () => (
    <Aux>
        <div className="contentContainer">
            <div  className="siteThumbnail">
                <img src={ mauroThumb } alt="Mauro VFX Professional Marketing" />
            </div>        
            <div className="workTextContainer">
                <h3>Mauro Pinedo VFX Portfolio</h3>
                <h5>Logo Design, SASS, PHP CMS</h5>
                <p>A brief description possibly -  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <a className="c2A" href='vfx.michaelside.com'>
            Check It Out
        </a>
        <Link to='/work/video' exact>
            <img src={arrow} className="navArrow" alt="page navigation button" />
        </Link>
    </Aux>
);

export default mauro;