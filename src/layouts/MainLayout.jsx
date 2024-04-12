import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
import DrawerComp from "../components/Drawer/DrawerComp";

function MainLayout() {
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
        }}
      >
        <DrawerComp/>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default MainLayout;
