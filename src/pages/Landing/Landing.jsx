import "./landing.css"
import Login from "../Login/Login";

import AboutUs from "../../components/AboutUs/AboutUs";

const Landing = () => {
  return (
    <div  className="landingContainer">  
    
      <div  className="landingLogin">        
          <Login />        
      </div>
      <div className="landingText" >
        <AboutUs />
      </div>
    </div>
    /* 
      <Grid container sx={{ width: "100vw" }} className="landingContainer">   
    
    { <Grid item xs={12} md={6}  lg={5} className="loginContainer">        
          <Login />        
      </Grid>}
      <Grid item xs={12} md={6} lg={7} className="textContainer"sx={{justifyContent:'center'}}>
        <AboutUs />
      </Grid>
    </Grid>
     */
  );
};
export default Landing;
