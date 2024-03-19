import React, { useEffect } from "react";

import '../assets/css/TopinstituteSlider.css';

import Logo1 from '../assets/Images/Logo1.png';
import Logo2 from '../assets/Images/Logo2.jpeg';
import Logo3 from '../assets/Images/Logo3.jpeg';
import Logo4 from '../assets/Images/Logo4.png';
import Logo5 from '../assets/Images/Logo5.png';
import Logo6 from '../assets/Images/Logo6.png';
import Logo7 from '../assets/Images/Logo7.jpeg';
const InstituteSlider = ()=>{
    useEffect(()=>{
        var copy = document.querySelector('.insist-logos-slider').cloneNode(true);
        document.querySelector('.insist-logos').appendChild(copy);
    },[]);

    return(
        <>
            <div className="insist-logos">
                <div className="insist-logos-slider">
                    <img src={Logo1} alt="" />
                    <img src={Logo2} alt="" />
                    <img src={Logo3} alt="" />
                    <img src={Logo4} alt="" />
                    <img src={Logo5} alt="" />
                    <img src={Logo6} alt="" />
                    <img src={Logo7} alt="" />
                </div>
            </div>
        </>
    );
}

export default InstituteSlider;