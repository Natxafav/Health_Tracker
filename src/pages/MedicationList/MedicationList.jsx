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

  // Esta funcion devuelve un div, la idea seria que devolviese el componente tarjeta con las medicaciones

  const displayUserMeds = () => {
    const display =
      familyMeds .length>0? ( familyMeds &&
      familyMeds.map((elem, idx) => {
        return (
          <Card key={idx}>
            <CardHeader title={elem.name} />
            <CardContent>
              {elem.medications.map((elem, idx) => {
                return <OneMed item={elem} key={idx} />;
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
    <div
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-evenly",
        justifyContent: "start",
        flexWrap: "wrap",
        position: "absolute",
        top: "100px",
        zIndex: "-1",
        paddingBottom: "200px",
      }}
    >
      {displayUserMeds()}
    </div>
  );
}

export default MedicationList;
