import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteMedication, updateMedication } from "../../services/meds";


const OneMed = ({ item }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [posology, setPosology] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleOnEdit = () => {
    setOnEdit(!onEdit);
  };

  const handleModify = async () => {
    try {
      const response = await updateMedication(item.id, {
        name,
        datetime,
        posology,
        end: duration,
        description,
      });
      navigate('/meds')
      return response.data
    } catch (error) {
      throw error;
    }
  };
  const handleDelete = async () => {
    try {
      const response = await deleteMedication(item.id);
      navigate("/meds");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      {!onEdit ? (
        <Card className="cardIndvContainer" sx={{ borderRadius: "20px" }}>
          <CardContent
            className="fields"
            sx={{ backgroundColor: "blue", color: "white" }}
          >
            {item.name && <p>Medication: {item.name}</p>}
            {item.datetime && <p> Start date: {item.datetime}</p>}
            {item.posology && <p>Posology: {item.posology}</p>}
            {item.end && <p>End date: {item.end}</p>}
            {item.description && <p>Description: {item.description}</p>}
          </CardContent>
          <CardActions
            className="btncontainer"
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Button
              variant="outlined"
              onClick={() => handleOnEdit()}
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
            <Button
              onClick={() => handleDelete()}
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
              Delete
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Card className="cardIndvContainer" sx={{ borderRadius: "20px" }}>
          <CardContent
            className="fields"
            sx={{ backgroundColor: "blue", color: "white" }}
          >
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins" }}
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
              type="datetime-local"
              className="field"
              defaultValue={item.datetime}
              label="Date/ Hour"
              onChange={(e) => setDatetime(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins" }}>Date/Hour</Typography>
            </TextField>
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins" }}
              type="time"
              className="field"
              defaultValue={item.posology}
              label="Posology"
              onChange={(e) => setPosology(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins" }}>Posology</Typography>
            </TextField>
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins" }}
              type="datetime-local"
              className="field"
              defaultValue={item.end}
              label="End Date/ Hour"
              onChange={(e) => setDuration(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins" }}>Duration</Typography>
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
