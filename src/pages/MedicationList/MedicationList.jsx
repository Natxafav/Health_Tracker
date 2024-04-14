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
            sx={{ overflowY: "scroll" }}
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
            margin: "10px 0px 0px 1300px",
            color: "white",
            backgroundColor: "rgb(7, 150, 151)",
            ":hover": {
              backgroundColor: "black",
              fontSize: "15px",
              transition: "0.5s",
            },
          }}
        >
          New meed
        </Button>
      </Link>
      {displayUserMeds()}
    </Card>
  );
}

export default MedicationList;
