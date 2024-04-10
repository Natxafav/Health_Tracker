import { useEffect, useState } from "react";
import { getAllMedicationsUser } from "../../services/meds";
import OneMed from "../../components/OneMed/OneMed";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  TextField,
  Typography,
} from "@mui/material";

function MedicationList() {


  const [familyMeds, setFamilyMeds] = useState([]);

  const retrieveFamilyMeds = async () => {
    const res = await getAllMedicationsUser();
 
    setFamilyMeds(res);
  };


  const displayUserMeds = () => {

    const display =
      familyMeds .length>0? ( familyMeds &&
      familyMeds.map((elem, idx) => {
        return (
          <Card key={idx}>
            <CardHeader title={elem.name} />
            <CardContent>
              {elem.medications.map((elem, id) => {
                return <OneMed item={elem} key={id} />;
              })}
            </CardContent>
          </Card>
        );
      })):(<h1>No hay medicamentos almacenados</h1>)
    return display;
  };


  useEffect(() => {
    retrieveFamilyMeds();
  }, []);

  return (

    <Card sx={{width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-evenly",
    justifyContent: "start",
    flexWrap: "wrap",
    position: "absolute",
    top: "100px",
    zIndex: "-1",
    paddingBottom: "200px",}}>
    
      {displayUserMeds()}
    
    </Card>
  );
}

export default MedicationList;
