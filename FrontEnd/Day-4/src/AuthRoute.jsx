import { Children } from "react";
import { Routes, Route} from "react-router-dom"

const AuthRoute = ()=>{
    const isLogged = false;
    if(!isLogged) return (<h1>Access Denined</h1>)
    else return(<div>{Children}</div>)
}

export default AuthRoute;