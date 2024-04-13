
import { Outlet } from "react-router-dom"
import DrawerComp from '../components/Drawer/DrawerComp'
import { Box } from "@mui/material"
import Header from "../components/Header/Header"


function SecondLayaout() {
    return (
        <>
          {/*  <Header /> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "80vh",
        }}
        >
     <DrawerComp/>
        
        <Outlet />
      </Box>    
        </>
    )
}

export default SecondLayaout