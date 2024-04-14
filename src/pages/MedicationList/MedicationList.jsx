import { useEffect, useState } from "react";
import { getAllMedicationsUser } from "../../services/meds";
import OneMed from "../../components/OneMed/OneMed";
import { Card, CardContent, CardHeader, Button, Typography } from "@mui/material";
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
            sx={{ overflowY: "scroll" }}
          >
            <CardHeader title={<Typography variant="h5" color="rgb(7, 150, 151)"sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
          {elem.name}
        </Typography>} />
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
               
                margin:"0 auto"
              }}
            >
              {elem.medications && elem.medications.length > 0 ? (
                elem.medications.map((elem, id) => {
                  return (
                    <OneMed item={elem} key={id} handleReload={setReload} />
                  );
                })
              ) : (
                <h5>No medications found for this user</h5>
              )}
            </CardContent>
          </Card>
        );
      })
    ) : (
      <h1>No medications found</h1>
    );
    return display;
  };
  const [reload, setReload] = useState(false);

  useEffect(() => {
    retrieveFamilyMeds();
  }, [reload]);

  return (
    <Card
      className="CardReturnMedicationList"
      sx={{ width: "90%", height: "80vh", overflowY: "scroll" }}
    >
      <Link to={"/meds/create"}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: "50px",
            fontSize: "20px",
            fontWeight: "800",
            width: "200px",
            margin: "50px 0px 0px 1250px", 
            color: "white",
            backgroundColor: "rgb(7, 150, 151)",
            ":hover": {
              backgroundColor: "green",
              color: "yellow",
              fontSize: "15px",
              transition: "0.5s",
            },
            position: "fixed", 
            top:"100px", 
            right:"50px"
          }}
        >
          New
        </Button>
      </Link>
      {displayUserMeds()}
    </Card>
  );
}

export default MedicationList;
