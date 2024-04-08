
import { createBrowserRouter, redirect } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";

import Landing from "../pages/Landing/Landing";
import FamilyChoice from "../components/FamilyChoice/FamilyChoice";
import FamilyData from "../pages/FamilyData/FamilyData";
import SignUp from "../pages/SignUp/SignUp";


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
            loader: () => {
                if(localStorage.getItem('Authorization')){
                    return null
                } else {
                    return redirect('/')
                }
            }
        }]
    },
    {
        path: "login",
        element: <Login/>,
        
    }, 
    {
        path: 'signup',
        element: <SignUp/>
    }, {
        path:'family/create',
        element:<FamilyData/>
    },{
        path: 'family-choice',
        element: <FamilyChoice/>
    }
    
]);