//  Libraries
import React from 'react';
import Tilt from 'react-tilt';

//  CSS
import './Logo.css';
//  IMAGES
import brain from './brain.png';
const Logo = () => {
    return (
       <div className="ma4 mt10">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> 
                    <img src={brain} style={{paddingTop:'5px'}} alt="brain"/> 
                </div>
            </Tilt>
       </div>
    );
}
export default Logo;