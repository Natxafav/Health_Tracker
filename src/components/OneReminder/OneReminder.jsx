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
  import { deleteReminder, updateReminder } from "../../services/reminder";

const OneReminder = ({ item, handleReload }) => {

    const date = new Date(item.Date);
      
    const [onEdit, setOnEdit] = useState(false);
  
    const [itemId, setItemId] = useState(item.id);
    const [name, setName] = useState(item.name);
    const [datetime, setDatetime] = useState(
      `${date.getFullYear(item.datetime)}/${
        (date.getMonth(item.datetime)+1).toLocaleString().padStart(2, "0")
      }/${date
        .getDay(item.datetime)
        .toLocaleString()
        .padStart(2, "0")} ${date.getHours(item.datetime)}:${date
        .getMinutes(item.datetime)
        .toLocaleString()
        .padStart(2, "0")}:00`
    );
   
    const [description, setDescription] = useState(item.description);
  
    const navigate = useNavigate();
    const handleOnEdit = () => {
      setOnEdit(!onEdit);
    };
  
    const handleModify = async () => {
      try {
        setItemId(item.id);
  
     
        const response = await updateReminder(itemId, {
          name,
          Date:datetime,
          description,
        });
  
        setOnEdit((prev) => !prev);
        handleReload((prev) => !prev);
        return response.data;
      } catch (error) {
        throw error;
      }
    };
    const handleDelete = async () => {
      try {
        const response = await deleteReminder(item.id);
  
        location.reload();
        return response.data;
      } catch (error) {
        throw error;
      }
    };
    
    return (
      <>
        {!onEdit ? (
          <Card className="cardIndvContainer" sx={{ borderRadius: "20px",
          gap: '20px' , }}>
            <CardContent
              className="fields"
              sx={{ backgroundColor: "rgb(7, 150, 151)", color: "white" }}> 
            {<p>Reminder</p>}
            <div style={{ background: "white", color:"black", textAlign:"left", height:"50px", borderRadius: "20px", padding:"10px 10px 10px 10px"}}>
            {name}
            </div>
            {<p> Start date</p>}
            <div style={{ background: "white", color:"black", textAlign:"left", height:"50px", borderRadius: "20px", padding:"10px 10px 10px 10px"}}>
            {datetime}
            </div>       
            {<p>Description</p>}
            <div style={{ background: "white", color:"black", textAlign:"left",width:"300px", height:"150px", borderRadius: "20px", padding:"10px 10px 10px 10px"}}>
            {description}
            </div>
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
                  backgroundColor: "rgb(7, 150, 151)",
                  fontFamily: "poppins",
                  ":hover": {
                    transition: "0.3s",
                    backgroundColor: "rgb(7, 150, 151)",
                    color: "yellow",
                    fontSize: "18px",
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
                  backgroundColor: "red",
                  fontFamily: "poppins",
                  ":hover": {
                    fontSize: "18px",
                    transition: "0.3s",
                    backgroundColor: "red",
                    color: "yellow",
                  },
                }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ) : (
          <Card className="cardIndvContainer" sx={{ borderRadius: "20px"}}>
            <CardContent
              className="fields"
              sx={{ backgroundColor:"rgb(7, 150, 151)", color: "white" }}
            >
              <TextField
                sx={{ margin: "10px", fontFamily: "poppins", backgroundColor: "white" }}
                type="text"
                className="field"
                defaultValue={item.name}
                label="Medication Name"
                onChange={(e) => setName(e.target.value)}
              >
                <Typography sx={{ fontFamily: "poppins" }}>
                  Reminder 
                </Typography>
              </TextField>
              <TextField
                sx={{ margin: "10px", fontFamily: "poppins", backgroundColor: "white"}}
                type="datetime"
                className="field"
                defaultValue={datetime}
                label="Date/ Hour"
                onChange={(e) => setDatetime(e.target.value)}
              >
                <Typography sx={{ fontFamily: "poppins" }}>Date/Hour</Typography>
              </TextField>
             
            
              <TextField
                sx={{ margin: "10px", fontFamily: "poppins", backgroundColor: "white" }}
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
                  backgroundColor: "Green",
                  fontFamily: "poppins",
                  fontWeight: "800",
                  ":hover": {
                    transition: "0.2s",
                    backgroundColor: "green",
                    color: "yellow",
                    fontSize: "18px"
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
                  backgroundColor: "Red",
                  fontFamily: "poppins",
                  ":hover": {
                    transition: "0.2s",
                    backgroundColor: "red",
                    color: "yellow",
                    fontSize: "16px"
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




}

export default OneReminder