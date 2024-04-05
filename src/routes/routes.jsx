
import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import SignUp from "../pages/SignUp/SignUp";
import Landing from "../pages/Landing/Landing";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:
        [{
            path: "",
            element: <Landing/>,
        },
        {
            path: 'home',
            element: <Home/>,
        }]
    },
    {
        path: "login",
        element: <Login/>,
    }, 
    {
        path: 'signup',
        element: <SignUp/>
    }
]);