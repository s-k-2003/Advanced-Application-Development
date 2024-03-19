import React from "react";

import '../../assets/css/Footer.css';
import { useNavigate } from "react-router-dom";

const Footer =()=>{
    const nav = useNavigate('');
    return(
        <>
           <footer>
                <div className="footer-container">
                    <div className="footer-row">
                        <div className="footer-col">
                            <h4 onClick={()=>nav('/')}>Queen's Realm</h4>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a onClick={()=>nav('/courses')}>Courses</a></li>
                                <li><a >Admissions</a></li>
                                <li><a >Institutes</a></li>
                                <li><a >Top Players</a></li>
                                <li><a >Our Academy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Connect with Us</h4>
                            <ul>
                                <li><a href="#">queensrealm@info.com</a></li>
                                <li><a href="#">+91 638052XXXX</a></li>
                                <li><a href="#" className="mode-address">Dubai Bus Stand, <br/>Dubai Main Road ,<br/> Dubai</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Enquiry</h4>
                            <form action="">
                                <input type="email" placeholder="Your Email" className="footer-input"/>
                                <input type="submit" value="Enquiry" className="footer-input-submit"/>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-row">
                        <div className="footer-cols">
                            <p><i className="bx bx-copyright"></i> 2024 Queen's Realm. All Rights Reserved.</p>
                        </div>
                        <div className="footer-social-icons">
                            <a href="#"><i className="bx bxl-whatsapp"></i></a>
                            <a href="#"><i className="bx bxl-instagram"></i></a>
                            <a href="#"><i className="bx bxl-twitter"></i></a>
                            <a href="#"><i className="bx bxl-youtube"></i></a>
                        </div>
                    </div>
                </div>
           </footer>
        </>
    );
}

export default Footer;