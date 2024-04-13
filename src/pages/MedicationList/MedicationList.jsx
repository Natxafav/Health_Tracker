import { useEffect, useState } from "react";
import { getAllMedicationsUser } from "../../services/meds";
import OneMed from "../../components/OneMed/OneMed";
import { Card, CardContent, CardHeader, Button } from "@mui/material";
import { Link } from "react-router-dom";

function MedicationList() {
  const [familyMeds, setFamilyMeds] = useState([]);
  const retrieveFamilyMeds = async () => {
    const res = await getAllMedicationsUser();
    setFamilyMeds(res);
  };
  const displayUserMeds = () => {
    const display = familyMeds ? (
      familyMeds.map((elem, idx) => {
        return (
          <Card
            className="CardMedicationList"
            key={idx}
            sx={{
              maxWidth: "fit-content",
              width: "90%",
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: "20px",
              paddingBottom: "200px",
              height: '100%'
            }}
>
            <CardHeader title={elem.name} />
            <CardContent
              sx={{
                width: "90%",
                display: "flex",
                flexDirection: "row",
                alignItems: "space-evenly",
                justifyContent: "start",
                flexWrap: "wrap",
                gap: "20px",
                paddingBottom: "200px",
              }}
            >
              {elem.medications.map((elem, id) => {
                return <OneMed item={elem} key={id} handleReload={setReload} />;
              })}
            </CardContent>
          </Card>
        );
      })
    ) : (
      <h1>No hay medicamentos almacenados</h1>
    );
    return display;
  };
  const [reload, setReload] = useState(false);

  useEffect(() => {
    retrieveFamilyMeds();
    console.log(reload);
  }, [reload]);

  return (
    <Card
      className="CardReturnMedicationList"
      sx={{
        height: "90vh",
        width: "90%",
        display: "flex",
        flexDirection: "row",
        alignItems: "space-evenly",
        justifyContent: "start",
        flexWrap: "wrap",
        gap: "20px",
        paddingBottom: "200px",
        paddingTop: "200px",
        overflowY: "scroll",
      }}
    >
      <Link to={"/meds/create"}>
        <Button
          variant="contained"
          fullWidth
          sx={{ height: "50px",fontSize: "20px",width: "200px", position: "absolute",margin: "38px 0px 0px 1400px", fontWeight: '800', backgroundColor:"rgb(7, 150, 151)", ":hover":{backgroundColor: "black", fontSize: "15px", transition: "0.5s"}}}
        >
          New meed
        </Button>
      </Link>
      {displayUserMeds()}
    </Card>
  );
}

export default MedicationList;
