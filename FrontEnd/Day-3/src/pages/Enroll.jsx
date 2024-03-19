import React, { useState } from 'react'
import '../assets/css/Enroll.css';
import { useNavigate } from 'react-router-dom';
const Enroll = ()=>{
    const nav = useNavigate('');
    const [currform , setCurrform] = useState(1);

    const handleEnrollment = ()=>{
        nav('/courses');
        sessionStorage.setItem('status', 'enrolled');
    }

    return(
        <div className='enroll-body'>
            <div className="enroll-container">
                <header className="enroll-header">Enrollment Form</header>

                <form action="" className="enroll-forms">
                    <div className={currform === 1 ? "enroll-form-first" : "enroll-form-first enroll-disabled"}>
                        <div className="enroll-details enroll-personal">
                            <span className="enroll-title">Personal Info</span>

                            <div className="enroll-fields">
                                <div className="enroll-input-field">
                                    <label>Full Name</label>
                                    <input type="text" placeholder='Full Name' required/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>DOB</label>
                                    <input type="date" placeholder='' required/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Gender</label>
                                    <input type="text" placeholder='Gender' required/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Email</label>
                                    <input type="text" placeholder='Email' required/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Mobile</label>
                                    <input type="text" placeholder='Contact Number' required/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Profession</label>
                                    <input type="text" placeholder='Profession' required/>
                                </div>
                            </div>
                        </div>

                        <div className="enroll-details enroll-id">
                            <span className="enroll-title">Identity Details</span>

                            <div className="enroll-fields">
                                <div className="enroll-input-field">
                                    <label>ID Type</label>
                                    <input type="text" placeholder='ID Type' required/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>ID Number</label>
                                    <input type="text" placeholder='ID Number' required/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Issued Date</label>
                                    <input type="date" placeholder='Issued Date' required/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Issued City</label>
                                    <input type="text" placeholder='Issued City' required/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Issued State</label>
                                    <input type="text" placeholder='Issued State' required/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Expiry Date</label>
                                    <input type="date" placeholder='Expiry Date' required/>
                                </div>
                            </div>
                            <button className="enroll-nextBtn" onClick={()=>setCurrform(2)}>
                                <span className="enroll-btnText">Next</span>
                                <i className="bx bx-right-arrow-alt"></i>
                            </button>
                        </div>
                    </div>
                     <div className={currform === 2 ? "enroll-form-first" : "enroll-form-first enroll-disabled"}>
                        <div className="enroll-details enroll-personal">
                            <span className="enroll-title">Course Info</span>

                            <div className="enroll-fields">
                                <div className="enroll-input-field">
                                    <label>Course Name</label>
                                    <input type="text" placeholder='Novice' disabled/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Level</label>
                                    <input type="text" placeholder='Level I' disabled/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Ratings</label>
                                    <input type="text" placeholder='800 - 1000' disabled/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Duration</label>
                                    <input type="text" placeholder='90 days' disabled/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Institution</label>
                                    <input type="text" placeholder='Institution' disabled/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Course Prefernce</label>
                                    <input type="text" placeholder='e.g., group class, private coaching' required/>
                                </div>
                            </div>
                        </div>

                        <div className="enroll-details enroll-id">
                            <span className="enroll-title">Additional Info</span>

                            <div className="enroll-fields">
                                <div className="enroll-input-field">
                                    <label>Any Experience ?</label>
                                    <input type="text" placeholder='Previous Experience' required/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>Tournaments</label>
                                    <input type="text" placeholder='Partcipated in tournaments' required/>
                                </div>
                                <div className="enroll-input-field">
                                    <label>How they heard about the academy ?</label>
                                    <input type="text" placeholder='How they heard about the academy ?' required/>
                                </div>
                            </div>
                            <div className="enroll-btns">
                            <button className="enroll-nextBtn" onClick={()=>setCurrform(1)}>
                                <i className="bx bx-left-arrow-alt"></i>
                                <span className="enroll-btnText">Back</span>
                            </button>
                            <button className="enroll-SubmitBtn" onClick={()=>handleEnrollment()}>
                                <span className="enroll-btnText">Submit</span>
                            </button>
                            </div>
                           
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Enroll