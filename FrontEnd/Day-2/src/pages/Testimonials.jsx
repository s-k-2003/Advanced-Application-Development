import React, { useEffect } from "react";

import '../assets/css/Testimonials.css';

import Knight from '../assets/Images/pawn.png';

import 'swiper/css';
import 'swiper/css/pagination';
import Swiper from "swiper";


const Testimonials=()=>{
    useEffect(()=>{
        const swiper = new Swiper('.js-tests-slider',{
            grabCursor: true,
            spaceBetween: 20,
            pagination: {
                el: '.js-tests-pagination',
                clickable: true
            },
            breakpoints: {
                767: {
                    slidesPerView: 3
                }
            }
        });
        
    },[]);
    return(
        <>
            <section className="tests">
                <div className="tests-container">
                    <div className="section-header">
                        <h2 className="sec-title">What students say about us ?</h2>
                    </div>
                    <div className="tests-content">
                        <div className="swiper tests-slider js-tests-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide tests-item">
                                    <div className="tests-info">
                                        <img src={Knight} alt="" />
                                        <div className="tests-text-box">
                                            <h3 className="tests-name">Sakthi Bala Sk</h3>
                                            <span className="tests-job">Former Chess Player</span>
                                        </div>
                                    </div>
                                    <p>It was fun and we learned about skewers and pins</p>
                                </div>
                                <div className="swiper-slide tests-item">
                                    <div className="tests-info">
                                        <img src={Knight} alt="" />
                                        <div className="tests-text-box">
                                            <h3 className="tests-name">Sakthi Bala Sk</h3>
                                            <span className="tests-job">Former Chess Player</span>
                                        </div>
                                    </div>
                                    <p>It was fun and we learned about skewers and pins</p>
                                </div>
                                <div className="swiper-slide tests-item">
                                    <div className="tests-info">
                                        <img src={Knight} alt="" />
                                        <div className="tests-text-box">
                                            <h3 className="tests-name">Sakthi Bala Sk</h3>
                                            <span className="tests-job">Former Chess Player</span>
                                        </div>
                                    </div>
                                    <p>It was fun and we learned about skewers and pins</p>
                                </div>
                                <div className="swiper-slide tests-item">
                                    <div className="tests-info">
                                        <img src={Knight} alt="" />
                                        <div className="tests-text-box">
                                            <h3 className="tests-name">Sakthi Bala Sk</h3>
                                            <span className="tests-job">Former Chess Player</span>
                                        </div>
                                    </div>
                                    <p>It was fun and we learned about skewers and pins</p>
                                </div>
                                <div className="swiper-slide tests-item">
                                    <div className="tests-info">
                                        <img src={Knight} alt="" />
                                        <div className="tests-text-box">
                                            <h3 className="tests-name">Sakthi Bala Sk</h3>
                                            <span className="tests-job">Former Chess Player</span>
                                        </div>
                                    </div>
                                    <p>It was fun and we learned about skewers and pins</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination js-tests-pagination"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;