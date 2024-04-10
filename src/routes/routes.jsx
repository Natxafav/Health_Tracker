import { createBrowserRouter, redirect } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Landing from "../pages/Landing/Landing";
import FamilyChoice from "../components/FamilyChoice/FamilyChoice";
import FamilyData from "../pages/FamilyData/FamilyData.jsx";
import SignUp from "../pages/SignUp/SignUp";
import Meds from "../pages/Meds/Meds.jsx";
import Family from "../pages/Family/Family.jsx";
import MedicationCreate from "../components/Medication/MedicationCreate.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      
      {
        path: "family-choice",
        element: <FamilyChoice />,
      },
      {
        path: "home",
        element: <Home />,
        loader: () => {
          if (localStorage.getItem("Authorization")) {
            return null;
          } else {
            return redirect("/");
          }
        },
      },
      {
        path: "family",
        loader: () => {
          if (localStorage.getItem("Authorization")) {
            return null;
          } else {
            return redirect("/");
          }
        },
        children: [
          {
            path: "",
            element: <Family />,
          },
          {
            path: "create",
            element: <FamilyData />,
          },
        ],
      },
      {
        path: "meds",
        
        loader: () => {
          if (localStorage.getItem("Authorization")) {
            return null;
          } else {
            return redirect("/");
          }
        },
        children: [
          {
            path: "",
            element: <Meds />,
          },{
            path: 'create',
            element:<MedicationCreate/>
        }],
      },
      {
        path: "meet",
        
        loader: () => {
          if (localStorage.getItem("Authorization")) {
            return null;
          } else {
            return redirect("/");
          }
        },
        children: [
          {
            path: "",
            element: <Meds />,
          },{
            path: 'create',
            element:<MedicationCreate/>
        }],
      },
      {
        path: "reminder",
        
        loader: () => {
          if (localStorage.getItem("Authorization")) {
            return null;
          } else {
            return redirect("/");
          }
        },
        children: [
          {
            path: "",
            element: <Meds />,
          },{
            path: 'create',
            element:<MedicationCreate/>
        }],
      },
    ],
  },
  
]);
