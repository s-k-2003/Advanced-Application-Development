import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Sidebar.css';

function Sidebar() {
    const nav = useNavigate('');
    const [isDashOpen, setIsDashOpen] = useState(true);

    const toggleDash = () => {
        setIsDashOpen(!isDashOpen);
    };

    const [curropt, setCurropt] = useState('watch');
  return (
    <>
        <nav className={`dash-nav ${isDashOpen ? 'dash-open' : ''}`}>
            <div className="dash-logo">
                <i className="bx bx-menu menu-icon" onClick={toggleDash}></i>
                <span className="dash-logo-name"  onClick={()=>nav('/')}>Queen's Realm</span>
            </div>
            <div className="dash-sidebar">
                <div className="dash-logo">
                    <i className="bx bx-menu menu-icon" onClick={toggleDash}></i>
                    <span className="dash-logo-name">Queen's Realm</span>
                </div>
                <div className="dash-sidebar-content">
                    <ul className="sidebar-lists">
                        <li className="sidebar-list" onClick={()=>setCurropt('watch')}>
                            <a href="#" className={curropt === 'watch' ? "dash-nav-link active-link" : "dash-nav-link"}>
                                <i className="bx bx-home dash-icon" ></i>
                                <span className="dash-link-name">Home</span>
                            </a>
                        </li>
                        <li className="sidebar-list" onClick={()=>setCurropt('about')}>
                            <a href="#" className={curropt === 'about' ? "dash-nav-link active-link" : "dash-nav-link"}>
                                <i className="bx bxs-graduation dash-icon"></i>
                                <span className="dash-link-name">Courses</span>
                            </a>
                        </li>
                        <li className="sidebar-list"  onClick={()=>setCurropt('trailers')}>
                            <a href="#" className={curropt === 'trailers' ? "dash-nav-link active-link" : "dash-nav-link"}>
                                <i className="bx bxs-school dash-icon"></i>
                                <span className="dash-link-name">Institutes</span>
                            </a>
                        </li>
                        <li className="sidebar-list"  onClick={()=>setCurropt('suggest')}>
                            <a href="#" className={curropt === 'suggest' ? "dash-nav-link active-link" : "dash-nav-link"}>
                                <i className="bx bx-user dash-icon"></i>
                                <span className="dash-link-name">Students</span>
                            </a>
                        </li>
                    </ul>

                    <div className="dash-bottom-content">
                        <li className="sidebar-list" onClick={()=>setCurropt('setting')}>
                            <a href="#" className={curropt === 'setting' ? "dash-nav-link active-link" : "dash-nav-link"}>
                                <i className="bx bx-cog dash-icon"></i>
                                <span className="dash-link-name">Settings</span>
                            </a>
                        </li>
                        <li className="sidebar-list" onClick={()=>setCurropt('logout')}>
                            <a href="#" className={curropt === 'logout' ? "dash-nav-link active-link" : "dash-nav-link"}>
                                <i className="bx bx-log-out dash-icon"></i>
                                <span className="dash-link-name">Logout</span>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Sidebar