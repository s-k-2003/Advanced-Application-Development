import React, { useEffect, useState } from 'react'

import '../../assets/css/Admin/Dashboard.css';

import Pawn from '../../assets/Images/Me.jpg';

import ApexCharts from 'apexcharts';
import { useNavigate } from 'react-router-dom';


const Dashboard =()=>{
    const nav = useNavigate('');
    const [dropdownStates, setDropdownStates] = useState({
        courses: false,
        profile: false
    });

    const [activeState, setActiveState] = useState('dashboard');

    const toggleDropdown = (dropdownName) => {
        setActiveState(dropdownName);
        setDropdownStates({
            ...dropdownStates,
            [dropdownName]: !dropdownStates[dropdownName]
        });
        
    };
    const [togglesidebar, setTogglesidebar] = useState(false);
    const handleToggleSidebar = ()=>{
        setTogglesidebar(!togglesidebar);
    }

    // const toggleSidebar = document.querySelector('.admin-navbar .admin-toggle-sidebar');
    // const sidebar = document.getElementById('sidebar');
    // toggleSidebar.addEventListener('click', ()=>{
    //     sidebar.classList.toggle('admin-hide');
    // })

    
    useEffect(()=>{
        const allProgress = document.querySelectorAll('.admin-main .admin-card .admin-progress');

        allProgress.forEach(item => {
            item.style.setProperty('--value', item.dataset.value)
        })
        const options = {
            series: [
              { name: 'series1', data: [31, 40, 28, 51, 42, 109, 100] },
              { name: 'series2', data: [11, 32, 45, 32, 34, 52, 41] }
            ],
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: { enabled: false },
            stroke: { curve: 'smooth' },
            xaxis: {
              type: 'datetime',
              categories: [
                '2018-09-19T00:00:00.000Z',
                '2018-09-19T01:30:00.000Z',
                '2018-09-19T02:30:00.000Z',
                '2018-09-19T03:30:00.000Z',
                '2018-09-19T04:30:00.000Z',
                '2018-09-19T05:30:00.000Z',
                '2018-09-19T06:30:00.000Z'
              ]
            },
            tooltip: { x: { format: 'dd/MM/yy HH:mm' } }
          };

          const options2 = {
            series: [
              { name: 'series1', data: [31, 40, 28, 51, 42, 109, 100] },
              { name: 'series2', data: [11, 32, 45, 32, 34, 52, 41] }
            ],
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: { enabled: false },
            stroke: { curve: 'smooth' },
            xaxis: {
              type: 'datetime',
              categories: [
                '2018-09-19T00:00:00.000Z',
                '2018-09-19T01:30:00.000Z',
                '2018-09-19T02:30:00.000Z',
                '2018-09-19T03:30:00.000Z',
                '2018-09-19T04:30:00.000Z',
                '2018-09-19T05:30:00.000Z',
                '2018-09-19T06:30:00.000Z'
              ]
            },
            tooltip: { x: { format: 'dd/MM/yy HH:mm' } }
          };
      
          const chart = new ApexCharts(document.querySelector('#chart'), options);
          const chart2 = new ApexCharts(document.querySelector('#chart2'), options2);
          chart.render();
          chart2.render();
      
          return () => {
            chart.destroy();
            chart2.destroy();
          };
    },[]);
    const [istoggle, setIsToggle] = useState('');
    
    const handleToggle = (type) =>{
        if(!!istoggle){
            setIsToggle('')
        }else{
            setIsToggle(type);
        }

    }

   

  

 return(
    <div className='admin-body'>
        <section id="sidebar" className={togglesidebar ? "admin-hide" : ""}>
            <a  className="admin-brand" onClick={()=>nav('/')}><i className="bx bxs-chess admin-icon"></i> Queen's Realm</a>
            <ul className="admin-side-menu">
                <li><a  className={activeState === 'dashboard' ? "admin-active" : ""} onClick={()=>setActiveState('dashboard')}><i className="bx bxs-dashboard admin-icon"></i> Dashboard</a></li>
                <li className="admin-divider admin-text"> Main</li>
                <li>
                    <a onClick={() => toggleDropdown('courses')} className={activeState === 'courses' ? "admin-active" : ""}><i className="bx bxs-graduation admin-icon"></i> Courses <i className="bx bx-chevron-right admin-icon-right"></i></a>
                    <ul className={`admin-side-dropdown ${dropdownStates['courses'] ? 'admin-dropmenu-active' : ''}`}>
                        <li><a href="#">Basic</a></li>
                        <li><a href="#">Intermediate</a></li>
                        <li><a href="#">Advanced</a></li>
                    </ul>
                </li>
                <li><a className={activeState === 'institutes' ? "admin-active" : ""} onClick={()=>setActiveState('institutes')}><i className="bx bxs-school admin-icon"></i> Institutes</a></li>
                <li><a className={activeState === 'students' ? "admin-active" : ""} onClick={()=>setActiveState('students')}><i className='bx bx-user admin-icon'></i> Students</a></li>
                <li className="admin-divider admin-text">Profile and Settings</li>
                <li><a className={activeState === 'settings' ? "admin-active" : ""} onClick={()=>setActiveState('settings')}><i className="bx bx-cog admin-icon"></i> Settings</a></li>
                <li>
                    <a onClick={() => toggleDropdown('profile')} className={activeState === 'profile' ? "admin-active" : ""}><i className="bx bxs-user admin-icon"></i> Profile <i className="bx bx-chevron-right admin-icon-right"></i></a>
                    <ul className={`admin-side-dropdown ${dropdownStates['profile'] ? 'admin-dropmenu-active' : ''}`}>
                        <li><a href="#">Manage Admins</a></li>
                        <li><a href="#">Add Sub-Admins</a></li>
                        <li><a href="#">Reset Password</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </section>


        <section id="content">
            <nav className='admin-navbar'>
                <i className="bx bx-menu admin-toggle-sidebar" onClick={()=>handleToggleSidebar()}></i>
                <form action="" className='admin-form'>
                    <div className="admin-form-group">
                        <input type="text" placeholder='Search...'/>
                        <i className="bx bx-search-alt admin-icon"></i>
                    </div>
                </form>
                <a href="" className="admin-nav-links">
                    <i className="bx bxs-bell admin-icon"></i>
                    <span className='admin-badge'>5</span>
                </a>
                <a href="" className="admin-nav-links">
                    <i className="bx bxs-message-dots admin-icon"></i>
                    <span className='admin-badge'>8</span>
                </a>
                <span className="admin-divider"></span>
                <div className="admin-profile">
                    <img src={Pawn} alt="" />
                </div>
            </nav>

            <main className='admin-main'>
                <h1 className="admin-title">Dashboard</h1>
                <ul className="admin-breadcrumbs">
                    <li><a href="#">Home</a></li>
                    <li className="admin-divider">/</li>
                    <li><a href="#" className='admin-active'>Dashboard</a></li>
                </ul>

                <div className="admin-info-data">
                    <div className="admin-card">
                        <div className="admin-head">
                            <div>
                                <h2>1500</h2>
                                <p>Students</p>
                            </div>
                            <i className="bx bx-user admin-icon"></i>
                        </div>
                        <span className="admin-progress" data-value="70%"></span>
                        <span className="admin-label">70%</span>
                    </div>
                    <div className="admin-card">
                        <div className="admin-head">
                            <div>
                                <h2>300</h2>
                                <p>Courses</p>
                            </div>
                            <i className="bx bxs-graduation admin-icon"></i>
                        </div>
                        <span className="admin-progress" data-value="90%"></span>
                        <span className="admin-label">90%</span>
                    </div>
                    <div className="admin-card">
                        <div className="admin-head">
                            <div>
                                <h2>750</h2>
                                <p>Institutes</p>
                            </div>
                            <i className="bx bxs-school admin-icon"></i>
                        </div>
                        <span className="admin-progress" data-value="75%"></span>
                        <span className="admin-label">75%</span>
                    </div>
                    <div className="admin-card">
                        <div className="admin-head">
                            <div>
                                <h2>$1500</h2>
                                <p>Earnings</p>
                            </div>
                            <i className="bx bx-trending-up admin-icon icon-up"></i>
                        </div>
                        <span className="admin-progress" data-value="80%"></span>
                        <span className="admin-label">80%</span>
                    </div>
                </div>

                <div className="admin-data">
                    <div className='admin-content-data'>
                        <div className="admin-head">
                            <h3>Sales Report</h3>
                            <div className="admin-menu">
                                <i className='bx bx-dots-horizontal-rounded admin-icon' onClick={()=>handleToggle('sales')}></i>
                                <ul className={istoggle === 'sales' ? "admin-menu-link show-content" : "admin-menu-link"}>
                                    <li><a href="#">Edit</a></li>
                                    <li><a href="#">Save</a></li>
                                    <li><a href="#">Delete</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="admin-chart">
                            <div id="chart"></div>
                        </div>
                    </div>
                    <div className='admin-content-data'>
                        <div className="admin-head">
                            <h3>Students Report</h3>
                            <div className="admin-menu">
                                <i className='bx bx-dots-horizontal-rounded admin-icon' onClick={()=>handleToggle('chat')}></i>
                                <ul className={istoggle === 'chat' ? "admin-menu-link show-content" : "admin-menu-link"}>
                                    <li><a href="#">Edit</a></li>
                                    <li><a href="#">Save</a></li>
                                    <li><a href="#">Delete</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="admin-chart">
                            <div id="chart2"></div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </div>
 );
}

export default Dashboard