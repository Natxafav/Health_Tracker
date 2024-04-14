import { createBrowserRouter, redirect } from "react-router-dom";

import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Landing from "../pages/Landing/Landing";
import FamilyChoice from "../components/FamilyChoice/FamilyChoice";
import FamilyData from "../pages/FamilyData/FamilyData.jsx";
import SignUp from "../pages/SignUp/SignUp";
import Family from "../pages/Family/Family.jsx";
import MedicationCreate from "../components/Medication/MedicationCreate.jsx";
import MedicationList from "../pages/MedicationList/MedicationList.jsx";
import Meet from "../pages/Meet/Meet.jsx";
import MeetCreate from "../components/MeetCreate/MeetCreate.jsx";
import Reminder from "../pages/Reminder/Reminder.jsx";
import ReminderCreate from "../components/ReminderCreate/ReminderCreate.jsx";


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
            element: <MedicationList/>,
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
            element:<Meet/>
           
          },{
            path: 'create',
            element: <MeetCreate/>
           
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
            element:<Reminder/>
          },{
            path: 'create',
            element:<ReminderCreate/>
        }],
      },
    ],
  },
  
]);
