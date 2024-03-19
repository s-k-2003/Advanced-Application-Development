import React, { useEffect, useState} from "react";

import '../assets/css/LandingPage.css';
import '../assets/Others/Common.css';
import 'boxicons/css/boxicons.min.css';

import Queen from '../assets/Images/Queen.png';
import King from '../assets/Images/BrownKing.png';


import { Expo } from "gsap/all";
import gsap from "gsap";
import Navbar from "./Others/Navbar";
import Login from "./Login";
import InstituteSlider from "./TopinstituteSlider";
import Testimonials from "./Testimonials";
import Footer from "./Others/Footer";


const LandingPage=()=>{

  useEffect(() => {

    const tl = gsap.timeline({});
    tl.fromTo('.landing-queen', { opacity: 0 }, { opacity: 1, duration: 0.3 });
    tl.to(".landing-queen", { y: 1170, ease: Expo.easeInOut});
    tl.fromTo('.landing-king', { opacity: 0 }, { opacity: 1, duration: 0.0 });
    tl.to(".landing-king", { y: 1170, ease: Expo.easeInOut});
    
  }, []);

  const [click, setClick] = useState(false);

  const handleLoginClick = () => {
    const newValue = !click;
    sessionStorage.setItem('boolean', newValue);
    setClick(newValue);
  };

  useEffect(()=>{
    function reveal() {
        var reveals = document.querySelectorAll('.show-wrapper');

        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealTop < windowheight - revealpoint) {
                reveals[i].classList.add('active-wrapper');
            } else {
                reveals[i].classList.remove('active-wrapper');
            }
        }
    }

    window.addEventListener('scroll', reveal);

    return () => {
        window.removeEventListener('scroll', reveal);
    };
  },[]);
  

    return(
        <>
        <div className="landing-body">
            <Navbar handleLoginClick={handleLoginClick} />
            {click && (<Login/>)}
            <section className={click ? "landing-wrapper" : "initsection landing-wrapper"}>
                <div className="landing-content">
                    <div className="landing-tagline">Chess Academy</div>

                    <div className="landing-pages"><span><i className="bx bxs-chess"></i></span></div>

                    <div className="landing-title">Queen's &nbsp;<span>Realm</span></div>
                    <div className="landing-more"><a href=""><i className="bx bx-shield"></i></a></div>

                    <div className="landing-desc">
                        <p>
                            Join in <span>Queen's Realm</span>
                        </p>
                    </div>
                </div>
                <div className={click ? "landing-queen queen-hide" : "landing-queen"}>
                    <img src={King} alt="King.png" className="Queen-img"/>
                </div>
                <div className={click ? "landing-king king-hide" : "landing-king"}>
                    <img src={Queen} alt="Queen.png" className="King-img"/>
                </div>
            </section>

            <section className={click ? "insit-sliders display-none": "insitsection insit-sliders show-wrapper"}>
                <InstituteSlider/>
            </section>

            <section className={click ? "testimonials-slider display-none" : "section testimonials-slider show-wrapper"}>
                <Testimonials/>
            </section>
            
            <Footer/>
        </div>
        
        </>
    );
}

export default LandingPage;