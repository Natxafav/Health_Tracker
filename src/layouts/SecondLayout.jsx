import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"


function SecondLayaout() {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet />            
        </div>
    )
}

export default SecondLayaout