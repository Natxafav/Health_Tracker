import {
  Card,
  CardContent,
  CardActions,
  Modal,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteReminder, updateReminder } from "../../services/reminder";

const OneReminder = ({ item, handleReload }) => {
  const date = new Date(item.datetime);

  const [open, setOpen] = useState(false);

  const [itemId, setItemId] = useState(item.id);
  const [name, setName] = useState(item.name);
  const [datetime, setDatetime] = useState(
    `${date.getFullYear(item.datetime)}/${(date.getMonth(item.datetime) + 1)
      .toLocaleString()
      .padStart(2, "0")}/${date
      .getDay(item.datetime)
      .toLocaleString()
      .padStart(2, "0")} ${date.getHours(item.datetime).toLocaleString()
        .padStart(2, "0")}:${date
      .getMinutes(item.datetime)
      .toLocaleString()
      .padStart(2, "0")}:00`
  );

  const [description, setDescription] = useState(item.description);

  const navigate = useNavigate();
  const handleOnEdit = () => {
    setOpen(true);
  };

  const handleModify = async () => {
    try {
      setItemId(item.id);

      const response = await updateReminder(itemId, {
        name,
        datetime,
        description,
      });

      setOpen(false);
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
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-edit-meds"
        aria-describedby="modal-modal-description"
      >
        <Card className="cardIndvContainer" sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
           
          }}>
          <CardContent
            className="fields"
            sx={{ backgroundColor: "rgb(7, 150, 151)", color: "white", borderRadius: "20px", display:"flex"}}
          >
            <TextField
              sx={{
                margin: "10px",
                fontFamily: "poppins",
                backgroundColor: "white"
              }}
              type="text"
              className="field"
              defaultValue={item.name}
              label="Medication Name"
              onChange={(e) => setName(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins" }}>Reminder</Typography>
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
              sx={{ margin: "10px", fontFamily: "poppins",  backgroundColor: "white" }}
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
                  fontSize: "18px",
                },
              }}
            >
              Save
            </Button>
            <Button
              onClick={() => handleClose()}
              variant="outlined"
              sx={{
                color: "white",
                backgroundColor: "Red",
                fontFamily: "poppins",
                ":hover": {
                  transition: "0.2s",
                  backgroundColor: "red",
                  color: "yellow",
                  fontSize: "16px",
                },
              }}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </Modal>
      <Card
        className="cardIndvContainer"
        sx={{ borderRadius: "20px", gap: "10px", width:"35%",
        }}
      >
        <CardContent
          className="fields"
          sx={{ backgroundColor: "rgb(7, 150, 151)", color: "white",}}
        >
          {<p>Reminder</p>}
          <div
            style={{
              background: "white",
              color: "black",
              textAlign: "left",
              height: "50px",
              borderRadius: "20px",
              padding: "10px 10px 10px 10px",
            }}
          >
            {name}
          </div>
          {<p> Start date</p>}
          <div
            style={{
              background: "white",
              color: "black",
              textAlign: "left",
              height: "50px",
              borderRadius: "20px",
              padding: "10px 10px 10px 10px",
            }}
          >
            {datetime}
          </div>
          {<p>Description</p>}
          <div
            style={{
              background: "white",
              color: "black",
              textAlign: "left",
              width: "auto",
              height: "150px",
              borderRadius: "20px",
              padding: "10px 10px 10px 10px",
            }}
          >
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

    
    </>
  );
};

export default OneReminder;
