import React from 'react';
import Aux from '../../../../hoc/Aux';
import mikeCV from '../../../../assets/images/michaelSideResume.pdf';

//Props have to be passed into function for props to work
const resume = () => (
    <Aux>
        <object className="pdf" data={ mikeCV } type="application/pdf" >
            Michael Side Web Dev Resume
        </object>
    </Aux>
);

export default resume;