import React from 'react';
import { NavLink } from 'react-router-dom';
import Aux from '../../hoc/Aux';
import kaliboLogo from '../../assets/images/gallery/kalibo-logo.png';
import mauroLogo from '../../assets/images/gallery/mauro-logo.png';
import bbLogo from '../../assets/images/gallery/bb-logo.png';

//Props have to be passed into function for props to work
const gallery = () => (
    <Aux>
        <div className="galleryContainer">
            <div className="galleryImg">
                <img className="bbLogo" src={ bbLogo } alt="board buddies logo mike side" />
            </div>
            <div className="galleryImg">
                <img className="mauroLogo" src={ mauroLogo } alt="mauro vfx logo mike side" />
            </div>
            <div className="galleryImg">
                <img className="kaliboLogo" src={ kaliboLogo } alt="kalibo dj logo mike side" />
            </div>
        </div>
    </Aux>
);

export default gallery;