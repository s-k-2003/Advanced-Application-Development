import React, { useState } from "react";

import '../../assets/css/Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = ({ handleLoginClick }) => {
    const nav = useNavigate('');

    const [click,setClick] = useState(false);

    const setLogin =()=>{
        if(click){
            setClick(false);
        }else{
            setClick(true)
        }
        handleLoginClick();
    }

    
    return(
        <>
        <div className="landing-nav">
                <div className="landing-logo">Queen's <span>Realm</span></div>

                    <div className="menu-links">
                        <ul>
                            <li onClick={()=>nav('/courses')}>Courses</li>
                            <li>Admissions</li>
                            <li>Top Institutes</li>
                            <li>Top Players</li>
                            <li>Our Academy</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    {click ? (
                         <div className="landing-account" onClick={()=>setLogin()}><i className="bx bx-x"></i></div>
                    ):(
                        <div className="landing-account" onClick={()=>setLogin()}>Login</div>
                    )}
                   

                    {/* <div className="landing-badges"><i className="bx bx-shield"></i></div> */}
            </div>
        </>
    );
}

export default Navbar;