import { useEffect, useState } from "react";
import { getAllFamiliesUser } from "../../services/family";
import { Card, CardContent, CardHeader, Button, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import OneFam from "../../components/OneFam/OneFam";
import './family.css'

const Family = () => {
  const [family, setFamily] = useState([]);
  const [familyName, setFamilyName] = useState("");
  const [reload, setReload] = useState(false);


  const retrievefamily = async () => {
    const res = await getAllFamiliesUser();
    
    setFamily(res);
  };

  useEffect(() => {
    retrievefamily();
  }, []);

/*  const handleModify = async () => {
    try {
    
      const response = await updateFamily(elem.id, {
        naname: familyName,
      });

      setOnEdit((prev) => !prev);
      handleReload((prev) => !prev);
      return response.data;
    } catch (error) {
      throw error;
    }
  }; */

  const displayUserFamily = () => { 
    const display = family ? (
      family.map((elem, idx) => {     
        return (
          <Card key={idx} className="CardDisplayFamily" sx={{height:"100%", width:"98%", }}>
            <CardHeader title={elem.name} className="CardHeaderDisplayFamily"/>
           
            <CardContent className="FamiliCardContent"
              sx={{
                width: "100%",
                height:"80%",
                display: "flex",                
                flexWrap: "wrap", 
                gap: "20px",
                margin:"0 auto",
                backgroundColor:" rgba(193, 245, 245, 0.575)", 
                borderRadius:"20px",
             
              }}
            >
              {elem.users.map((elem, id) => {
                return <OneFam item={elem} key={id} handleReload={setReload} />;

              })}
            </CardContent>
          </Card>
        );
      })
    ) : (
      <h1>No hay usuarios pertenecientes a esta familia</h1>
    );
    return display;
  };
 

  useEffect(() => {
    retrievefamily();
   
  }, [reload]);

  return (
    <Card className="subFamilyCardContent" sx={{ width: "90vw", height: "90vh", textAlign:"center" }}>
    
      {displayUserFamily()}
    </Card>
  );
};

export default Family;
