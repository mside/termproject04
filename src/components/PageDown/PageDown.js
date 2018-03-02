import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import arrow from '../../assets/images/arrow.svg';

class pageDown extends Component {
    render() {
        return (
            <Aux>
                <a href=''>
                    <img src={arrow} className="navArrow" alt="page navigation button" />
                </a>
            </Aux>
        );
    }
}

export default pageDown;