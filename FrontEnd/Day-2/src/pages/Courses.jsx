import React, { useEffect, useState } from "react";

import '../assets/css/Courses.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from 'swiper/modules';
import C2 from '../assets/Images/C2.png';
import Pawn from '../assets/Images/pawn.png';
import Bishop from '../assets/Images/Bishop.png';
import Knight from '../assets/Images/Knight.png';
import Rook from '../assets/Images/Rook.png';
import King from '../assets/Images/King.png';
import Queen from '../assets/Images/WhiteQueen.png';
import { useNavigate } from "react-router-dom";

import Footer from "./Others/Footer";
import Enroll from "./Enroll";

const Courses =()=>{
    const nav = useNavigate('');
   useEffect(()=>{
    const menuBtn = document.querySelector(".course-menu-btn");
    const menuContainer = document.querySelector(".course-menu-container");
    const menuWindow = document.querySelector(".course-menu-window");
    const menuInner = document.querySelector(".course-menu-inner");
    const menuCloseBtn = document.querySelector(".course-menu-close-btn");

    menuBtn.addEventListener("click",()=>{
        menuContainer.classList.add("active-menu");
        setTimeout(()=>{
            menuWindow.classList.add("active-menu");
        }, 1);

        setTimeout(()=>{
            menuInner.classList.add("active-menu");
        }, 1000);
        
    });

    menuCloseBtn.addEventListener("click", ()=>{
        setTimeout(()=>{
            menuContainer.classList.remove("active-menu");
        },500);
        setTimeout(()=>{
            menuWindow.classList.remove("active-menu");
        }, 1);

        setTimeout(()=>{
            menuInner.classList.remove("active-menu");
        }, 1000);
    });
   },[]);

//    const [enroll, setEnroll] = useState(false);
   const [more, setMore] = useState(false);
   const [modalData, setModalData] = useState(null);

   const [courseEnroll, setCourseEnroll] = useState(false);

   useEffect(()=>{
       const enroll = sessionStorage.getItem('status');
       setCourseEnroll(!!enroll);
   },[]);


   const courseData = [
    {
        title: "Novice",
        subTitle: "Level I",
        level: "800-1000",
        description: "This is where most beginners start, learning the basic rules, piece movement, and simple tactics",
        duration: "90 days",
        lessons: "3 Lessons",
        price: "$210 (3 months)",
        institution: "$70/Month",
        facts: [
            {title: "Course Duration :", duration: "90 days"},
            {title: "Lessons : ", duration: "3 Lessons"},
            {title: "Price :", duration: "$210 (3 months)"},
            { title: "Introduction to Chess Fundamentals", duration: "30 days" },
            { title: "Basic Rules and Piece Movement", duration: "30 days" },
            { title: "Beginner Tactics and Strategies", duration: "30 days" }
        ],
        image: Pawn,
        enrolled : courseEnroll
    },
    {
        title: "Apprentice",
        subTitle: "Level II",
        level: "1000 - 1800",
        description: "Here, you'll improve your tactical skills, learn basic positional concepts, and participate in your first tournaments.s",
        duration: "90 days",
        lessons: "3 Lessons",
        price: "$240 (3 months)",
        institution: "$80/Month",
        facts: [
            {title: "Course Duration :", duration: "90 days"},
            {title: "Lessons : ", duration: "3 Lessons"},
            {title: "Price :", duration: "$210 (3 months)"},
            { title: "Tactical Mastery  Expanding Your Arsenal :", duration: "30 days" },
            { title: "Understanding Basic Positional Concepts :", duration: "30 days" },
            { title: "Tournament Preparation and Strategy :", duration: "30 days" }
        ],
        image: Bishop,
        enrolled : courseEnroll
    },
    {
        title: "Adept",
        subTitle: "Level III",
        level: "1800 - 2200",
        description: "At this stage, you'll develop a more strategic understanding, improve your opening repertoire, and aim for the Candidate Master (CM) title (awarded at 2200).",
        duration: "120 days",
        lessons: "3 Lessons",
        price: "$270 (3 months)",
        institution: "$90/Month",
        facts: [
            {title: "Course Duration :", duration: "120 days"},
            {title: "Lessons : ", duration: "3 Lessons"},
            {title: "Price :", duration: "$210 (3 months)"},
            { title: "Advanced Strategy and Positional Understanding", duration: "40 days" },
            { title: "Mastering Openings: Building Your Repertoire", duration: "40 days" },
            { title: "Path to Candidate Master (CM) Title", duration: "40 days" }
        ],
        image: Rook,
        enrolled : courseEnroll
    },
    {
        title: "Journeyman",
        subTitle: "Level IV",
        level: "2200 - 2300",
        description: "This is where competition gets tougher. You'll delve deeper into positional chess, endgame principles, and aim for the FIDE Master (FM) title (awarded at 2300).",
        duration: "150 days",
        lessons: "3 Lessons",
        price: "$300 (3 months)",
        institution: "$70/Month",
        facts: [
            {title: "Course Duration :", duration: "180 days"},
            {title: "Lessons : ", duration: "3 Lessons"},
            {title: "Price :", duration: "$210 (3 months)"},
            { title: "In-depth Endgame Principles", duration: "50 days" },
            { title: "Strategic Decision Making at the Master Level", duration: "50 days" },
            { title: "Pursuing FIDE Master (FM) Title", duration: "50 days" }
        ],
        image: Knight,
        enrolled : courseEnroll
    },
    {
        title: "Expert",
        subTitle: "Level VI",
        level: "2300 - 2400",
        description: "Here, you'll need exceptional tactical vision, strategic planning skills, and in-depth chess knowledge. You'll compete for the International Master (IM) title (awarded at 2400) and potentially your first GM norm (special performance requirement).",
        duration: "180 days",
        lessons: "3 Lessons",
        price: "$330 (3 months)",
        institution: "$70/Month",
        facts: [
            {title: "Course Duration :", duration: "210 days"},
            {title: "Lessons : ", duration: "3 Lessons"},
            {title: "Price :", duration: "$210 (3 months)"},
            { title: "Advanced Tactical Vision and Calculation", duration: "60 days" },
            { title: "Mastering Complex Positions and Planning", duration: "60 days" },
            { title: "Road to International Master (IM) Title and GM Norms", duration: "60 days" }
        ],
        image: Queen,
        enrolled : courseEnroll
    },
    {
        title: "Mastero",
        subTitle: "Level VII",
        level: "2500+",
        description: "This is the chess elite. You'll need to achieve a minimum Elo of 2500, along with three GM norms in international tournaments.",
        duration: "210 days",
        lessons: "3 Lessons",
        price: "$360 (3 months)",
        institution: "$70/Month",
        facts: [
            {title: "Course Duration :", duration: "90 days"},
            {title: "Lessons : ", duration: "3 Lessons"},
            {title: "Price :", duration: "$210 (3 months)"},
            { title: "Introduction to Chess Fundamentals", duration: "70 days" },
            { title: "Basic Rules and Piece Movement", duration: "70 days" },
            { title: "Beginner Tactics and Strategies", duration: "70 days" }
        ],
        image: King,
        enrolled : courseEnroll
    },
    ]; 
   



    const openModal = (data) => {
        setModalData(courseData[data - 1]);
        setMore(true);
    };

const closeModal = () => {
    setModalData(null);
    setMore(false);
};

const handleEnroll = ()=>{
    if(courseEnroll){
        setCourseEnroll(!courseEnroll);
        sessionStorage.removeItem('status');
        location.reload(true);
    }else{
        nav('/enroll');
    }
}


    return(
        <div className="course-body">
            <section className="course-main">
                <header className="course-header">
                    <div className="course-logo">
                        <a onClick={()=>nav('/')}>
                            <span className="lg-font">Queen's</span>
                            <span className="sm-font">Realm</span>
                        </a>
                    </div>
                    <div className="course-search-container">
                        <div className="course-search-box">
                            <i className="bx bx-search"></i>
                            <input type="text" className="course-search-input" placeholder="Search Courses..."/>
                        </div>
                    </div>
                    <div className="course-main-menu">
                        <a href="#" className="course-menu-btn"><i className="bx bx-menu"></i></a>
                        <div className="course-menu-container">
                            <div className="course-menu-window">
                                <div className="course-menu-box">
                                    <div className="course-menu-inner">
                                        <div className="course-menu-close-btn"><i className="bx bx-x"></i></div>
                                        <div className="course-menu-bg-icon"><i className="bx bxs-dashboard"></i></div>
                                        <div className="course-menu-items">
                                            <a href=""><i className='bx bxs-graduation'></i>Enrolled Courses</a>
                                            <a href=""><i className='bx bx-notepad' ></i> Admissions</a>
                                            <a href=""><i className='bx bxs-school' ></i> Top Institutes</a>
                                            <a href=""><i className='bx bx-trophy' ></i> Top Players</a>
                                            <a href=""><i className='bx bx-info-circle'></i> Our Academy</a>
                                            <a href=""><i className="bx bx-envelope"></i> Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="course-slide-container">
                    <Swiper 
                        slidesPerView={1}
                        spaceBetween={20}
                        slidesOffsetBefore={0}
                        slidesOffsetAfter={0}
                        speed={800}
                        navigation={
                            {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            
                            }
                        } 
                        breakpoints={{
                            710:{
                                slidesPerView: 2,
                                slidesOffsetBefore: 30,
                            },
                            780:{
                                slidesPerView: 2.5,
                                slidesOffsetBefore: 30,
                            },
                            885:{
                                slidesPerView: 2.5,
                                slidesOffsetBefore: 30,
                                slidesOffsetAfter: 100
                            },
                            1070:{
                                slidesPerView: 3,
                                slidesOffsetBefore: 30,
                                slidesOffsetAfter: 100
                            },
                            1280:  {
                                slidesPerView: 3,
                                slidesOffsetBefore: 30,
                            },
                            1560: {
                                slidesPerView: 3.7,
                                slidesOffsetBefore: 30,
                            },
                        }}
                        modules={[Navigation]} 
                        className="course-card-swiper course-swiper">
                        <SwiperSlide className={more ? "course-swiper-slider display-hide" : "course-swiper-slider"}>
                            <div className="course-card course-pawn-bg">
                                <div className="course-card-img">
                                    <img src={Pawn} alt="" className="course-pawn-img" />
                                    <span className="course-level-number"><i className="bx bxs-chess"></i></span>
                                </div>
                                <div className="course-card-content">
                                    <div className="course-info">
                                        <h2>Novice</h2>
                                        <div className="course-sub-info">
                                            <span>Level I</span>
                                            <h4>400 - 1000</h4>
                                        </div>
                                    </div>
                                    <div className="course-read-more-btn">
                                        <a onClick={()=>openModal(1)}><span>Read More</span> <i className="bx bx-right-arrow-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={more ? "course-swiper-slider display-hide" : "course-swiper-slider"}>
                            <div className="course-card course-pawn-bg">
                                <div className="course-card-img">
                                    <img src={Bishop} alt="" className="course-bishop-img" />
                                    <span className="course-level-number"><i className="bx bxs-chess"></i></span>
                                </div>
                                <div className="course-card-content">
                                    <div className="course-info">
                                        <h2>Apprentice</h2>
                                        <div className="course-sub-info">
                                            <span>Level II</span>
                                            <h4>1000-1800</h4>
                                        </div>
                                    </div>
                                    <div className="course-read-more-btn">
                                        <a onClick={()=>openModal(2)}><span>Read More</span> <i className="bx bx-right-arrow-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={more ? "course-swiper-slider display-hide" : "course-swiper-slider"}>
                            <div className="course-card course-pawn-bg">
                                <div className="course-card-img">
                                    <img src={Rook} alt="" className="course-rook-img" />
                                    <span className="course-level-number"><i className="bx bxs-chess"></i></span>
                                </div>
                                <div className="course-card-content">
                                    <div className="course-info">
                                        <h2>Adept</h2>
                                        <div className="course-sub-info">
                                            <span>Level III</span>
                                            <h4>1800 - 2200</h4>
                                        </div>
                                    </div>
                                    <div className="course-read-more-btn">
                                        <a onClick={()=>openModal(3)}><span>Read More</span> <i className="bx bx-right-arrow-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={more ? "course-swiper-slider display-hide" : "course-swiper-slider"}>
                            <div className="course-card course-pawn-bg">
                                <div className="course-card-img">
                                    <img src={Knight} alt="" className="course-knight-img" />
                                    <span className="course-level-number"><i className="bx bxs-chess"></i></span>
                                </div>
                                <div className="course-card-content">
                                    <div className="course-info">
                                        <h2>Journeyman</h2>
                                        <div className="course-sub-info">
                                            <span>Level IV</span>
                                            <h4>2200 - 2300</h4>
                                        </div>
                                    </div>
                                    <div className="course-read-more-btn">
                                        <a onClick={()=>openModal(4)}><span>Read More</span> <i className="bx bx-right-arrow-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={more ? "course-swiper-slider display-hide" : "course-swiper-slider"}>
                            <div className="course-card course-pawn-bg">
                                <div className="course-card-img">
                                    <img src={Queen} alt="" className="course-queen-img" />
                                    <span className="course-level-number"><i className="bx bxs-chess"></i></span>
                                </div>
                                <div className="course-card-content">
                                    <div className="course-info">
                                        <h2>Expert</h2>
                                        <div className="course-sub-info">
                                            <span>Level V</span>
                                            <h4>2300 - 2400</h4>
                                        </div>
                                    </div>
                                    <div className="course-read-more-btn">
                                        <a onClick={()=>openModal(5)}><span>Read More</span> <i className="bx bx-right-arrow-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={more ? "course-swiper-slider display-hide" : "course-swiper-slider"}>
                            <div className="course-card course-pawn-bg">
                                <div className="course-card-img">
                                    <img src={King} alt="" className="course-king-img" />
                                    <span className="course-level-number"><i className="bx bxs-chess"></i></span>
                                </div>
                                <div className="course-card-content">
                                    <div className="course-info">
                                        <h2>Maestro</h2>
                                        <div className="course-sub-info">
                                            <span>Level VI</span>
                                            <h4>2500+</h4>
                                        </div>
                                    </div>
                                    <div className="course-read-more-btn">
                                        <a onClick={()=>openModal(6)}><span>Read More</span> <i className="bx bx-right-arrow-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="course-slider-nav">
                            <div className="swiper-button-next">Next <i className="bx bx-right-arrow-alt"></i></div>
                            <div className="swiper-button-prev"> <i className="bx bx-left-arrow-alt"></i>Prev</div>
                        </div>
                    </Swiper>
                </div>

                <div className="course-main-media-links">
                    <a href=""><i className="bx bxl-instagram"></i> Instagram</a>
                    <a href=""><i className="bx bxl-whatsapp"></i> Whatsapp</a>
                </div>

                <div className={more ? "course-modal-container course-modal-active" : "course-modal-container"}>
                {modalData && (
                    <div className="course-modal-box course-pawn-bg">
                        <div className="course-modal-content">
                            <a className="course-modal-close-btn" onClick={closeModal}><i className="bx bx-x"></i></a>
                            <div className="course-modal-inner">
                                <span className="course-modal-bg-title"><i className="bx bxs-chess"></i></span>
                                <div className="course-modal-image-area">
                                    {modalData.title === "Journeyman" ? (
                                        <img src={modalData.image} alt="" className="course-modal-img modal-knight-img" />
                                    ):(
                                        <img src={modalData.image} alt="" className={modalData.title === "Adept" ? "course-modal-img modal-rook-img" : "course-modal-img"} />
                                    )}
                                </div>
                                <div className="course-modal-text-content">
                                    <h1 className="course-modal-title">{modalData.title}</h1>
                                    <div className="course-modal-sub-title">
                                        <span>{modalData.subTitle}</span>
                                        <h4>{modalData.level}</h4>
                                    </div>
                                    <p>{modalData.description}</p>
                                    <a href="#" className="course-modal-see-more"><span>See More</span><i className="bx bx-right-arrow-alt"></i></a>
                                    <div className="course-facts">
                                    {(modalData?.facts ?? []).map((fact, index) => (
    
                                        
                                        <div key={index} className="course-fact">
                                            <h5>{fact.title}</h5>
                                            <span>{fact.duration}</span>
                                        </div>
                                        
                                    ))}  
                                         <div className={modalData.enrolled? "course-fact course-enroll-container course-enrolled" : "course-fact course-enroll-container"} onClick={() => handleEnroll()}>
                                            <span className="course-enrolled-btn">Enroll</span>
                                            {modalData.enrolled ? (
                                                <h5 className="course-enrolled-title">Enrolled</h5>
                                            ) : (
                                                <h5 className="course-enrolled-title">Not Enrolled</h5>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Courses;