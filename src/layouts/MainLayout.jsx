import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
import DrawerComp from "../components/Drawer/DrawerComp";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function MainLayout() {
const [actual, setActual] = useState(!!localStorage.getItem("Authorization"))
console.log(actual)
useEffect(()=>{
  setActual(!!localStorage.getItem("Authorization"))
},[])

const  pathLocation= useLocation()


  const checkRoute =()=>{
      if (actual !== pathLocation.pathname){
        setActual(pathLocation.pathname)
        location.reload()
      }
  }
  
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "80vh",
          overflowY: "scroll"
        }}
        >
        {!localStorage.getItem("Authorization") ? null : <DrawerComp/>}
        
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default MainLayout;
