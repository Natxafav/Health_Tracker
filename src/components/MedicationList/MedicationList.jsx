import { useEffect, useState } from "react";
import { getAllMedicationsUser } from "../../services/meds";
import OneMed from "../OneMed/OneMed";
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
    console.log(res);
    setFamilyMeds(res);
  };

  // Esta funcion devuelve un div, la idea seria que devolviese el componente tarjeta con las medicaciones

  const displayUserMeds = () => {
    const display = familyMeds.map((elem) => {
      return (
        <Card>
          <CardHeader title={elem.name} />
          <CardContent style={{ display: "flex", gap: "1em" }}>
            <CardContent>
              {elem.medications.map((elem, idx) => {
                return <OneMed item={elem} key={idx} />;
              })}
            </CardContent>
          </CardContent>
        </Card>
      );
    });
    return display;
  };

  useEffect(() => {
    retrieveFamilyMeds();
  }, []);

  return <div>{displayUserMeds()}</div>;
}

export default MedicationList;
