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
          <Card key={idx} className="CardDisplayFamily" sx={{height:"80vh", textAlign:"center" }}>
            <CardHeader title={elem.name} className="CardHeaderDisplayFamily"/>
            {/* <CardActions
            className="btncontainer"
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Button
              variant="outlined"
              onClick={() => handleModify(elem.id)}
              sx={{
                color: "white",
                backgroundColor: "black",
                fontFamily: "poppins",
                ":hover": {
                  backgroundColor: "Aqua",
                  color: "black",
                  boxShadow: "15px -5px 10px",
                },
              }}
            >
              Modify
            </Button>
            </CardActions> */}
            <CardContent className="FamiliCardContent"
              sx={{
                width: "90%",
                height:"90%",
                display: "flex",
                flexDirection: "row",
                alignItems: "space-evenly",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
                paddingBottom: "200px",
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
    <Card sx={{ width: "90%", height: "80vh" }}>
    
      {displayUserFamily()}
    </Card>
  );
};

export default Family;
