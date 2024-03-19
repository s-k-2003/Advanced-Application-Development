import React, { useEffect } from "react";
import { Routes, Route, useLocation} from "react-router-dom"
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Courses from "./pages/Courses";
import Enroll from "./pages/Enroll";
import Dashboard from "./pages/Admin/Dashboard";

const ScrollTop = () =>{
    const {pathname} = useLocation();
    useEffect(()=>{
        window.scroll(0,0);
    },[pathname]);
    return null;
};
const RouteApp = ()=> {
    return (
        <>
        <ScrollTop/>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/enroll" element={<Enroll/>}/>
            <Route path="/admin" element={<Dashboard/>}/>
        </Routes>
        </>
    );
}

export default RouteApp;