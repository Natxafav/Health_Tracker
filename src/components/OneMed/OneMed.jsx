import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteMedication, updateMedication } from "../../services/meds";

const OneMed = ({ item, handleReload }) => {
  const date = new Date(item.datetime);
  const endDate = new Date(item.end);

  const [onEdit, setOnEdit] = useState(false);

  const [name, setName] = useState(item.name);
  const [datetime, setDatetime] = useState(`${date.getFullYear(item.datetime)}-${
      (date.getMonth(item.datetime)+1).toLocaleString().padStart(2, "0")}-${date.getDay(item.datetime)
      .toLocaleString().padStart(2, "0")} ${date.getHours(item.datetime)}:${date.getMinutes(item.datetime)
      .toLocaleString().padStart(2, "0")}:00`);
  const [posology, setPosology] = useState(`${date.getHours(item.posology)}:${date
      .getMinutes(item.posology).toLocaleString().padStart(2, "0")}:00`);
  const [dateEnd, setDateEnd] = useState(`${endDate.getFullYear(item.end)}-${(endDate.getMonth(item.end)+1)
    .toLocaleString().padStart(2, "0")}-${endDate.getDay(item.end).toLocaleString().padStart(2, "0")} 
    ${endDate.getHours(item.end)}:${endDate.getMinutes(item.end).toLocaleString().padStart(2, "0")}:00`);
  const [description, setDescription] = useState(item.description);
  const [itemId, setItemId] = useState(item.id);

  const navigate = useNavigate();
  const handleOnEdit = () => {
    setOnEdit(!onEdit);
  };

  const handleModify = async () => {
  
      setItemId(item.id);
      const response = await updateMedication(itemId, {name,datetime,posology,end: dateEnd,description,});
      setOnEdit((prev) => !prev);
      handleReload((prev) => !prev);
      return response.data;   
  };
  const handleDelete = async () => {    
      const response = await deleteMedication(item.id);
      location.reload();
      return response.data;
     };
;
  return (
    <>
      {!onEdit ? (
        <Card className="cardIndvContainer" sx={{ borderRadius: "20px" }}>
          <CardContent className="fields"  sx={{ backgroundColor: "blue", color: "white" }}>
            {<p>Medication: {item.name}</p>}
            {<p> Start date: {datetime}</p>}
            {<p>Posology: {posology}</p>}
            {<p>End date: {dateEnd}</p>}
            {<p>Description: {item.description}</p>}
          </CardContent>
          <CardActions className="btncontainer" sx={{ display: "flex", justifyContent: "end" }} >
            <Button variant="outlined" onClick={() => handleOnEdit()} sx={{ color: "white",
                backgroundColor: "black", fontFamily: "poppins", ":hover": { backgroundColor: "Aqua",
                  color: "black", boxShadow: "15px -5px 10px", },  }}> Modify </Button>
            <Button onClick={() => handleDelete()} variant="outlined" sx={{ color: "white",
                backgroundColor: "black", fontFamily: "poppins", ":hover": {backgroundColor: "Aqua",
                  color: "black", boxShadow: "15px -5px 10px", }, }}  > Delete  </Button>
          </CardActions>
        </Card>
      ) : (
        <Card className="cardIndvContainer" sx={{ borderRadius: "20px" }}>
          <CardContent className="fields" sx={{ backgroundColor: "blue", color: "white" }}  >
            <TextField sx={{ margin: "10px", fontFamily: "poppins" }} 
              type="text"
              className="field"
              defaultValue={item.name}
              label="Medication Name"
              onChange={(e) => setName(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins" }}>
                Medication Name
              </Typography>
            </TextField>
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins" }}
              type="datetime"
              className="field"
              defaultValue={datetime}
              label="Date/ Hour"
              onChange={(e) => setDatetime(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins" }}>Date/Hour</Typography>
            </TextField>
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins" }}
              type="time"
              className="field"
              defaultValue={posology && posology}
              label="Posology"
              onChange={(e) => setPosology(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins" }}>Posology</Typography>
            </TextField>
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins" }}
              type="datetime"
              className="field"
              defaultValue={dateEnd}
              label="End Date/ Hour"
              onChange={(e) => setDateEnd(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins" }}>dateEnd</Typography>
            </TextField>
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins" }}
              type="text"
              className="field"
              defaultValue={item.description}
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins" }}>
                Description
              </Typography>
            </TextField>
          </CardContent>
          <CardActions
            className="btncontainer"
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Button
              variant="outlined"
              onClick={() => handleModify()}
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
              Save
            </Button>
            <Button
              onClick={() => handleOnEdit()}
              variant="outlined"
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
              Cancel
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default OneMed;
