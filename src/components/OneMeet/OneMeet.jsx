import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  TextField,
  Typography,
} from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteAppointment, updateAppointment } from "../../services/meets"

const OneMeet = ({ item, handleReload }) => {
  const date = new Date(item.datetime)

  const [onEdit, setOnEdit] = useState(false)

  const [datetime, setDatetime] = useState(
    `${date.getFullYear(item.datetime)}/${(date.getMonth(item.datetime) + 1)
      .toLocaleString()
      .padStart(2, "0")}/${date
        .getDay(item.datetime)
        .toLocaleString()
        .padStart(2, "0")} ${date.getHours(item.datetime)}:${date
          .getMinutes(item.datetime)
          .toLocaleString()
          .padStart(2, "0")}:00`
  )

  const [locate, setLocate] = useState(item.locate)

  const [specialist, setSpecialist] = useState(item.specialist)

  const [description, setDescription] = useState(item.description)
  const [itemId, setItemId] = useState(item.id)

  const handleOnEdit = () => {
    setOnEdit(!onEdit)
  }

  const handleModify = async () => {
    try {
      setItemId(item.id)

      const response = await updateAppointment(itemId, {
        datetime,
        locate,
        specialist,
        description,
      })

      setOnEdit((prev) => !prev)
      handleReload((prev) => !prev)
      return response.data
    } catch (error) {
      throw error
    }
  }
  const handleDelete = async () => {
    try {
      const response = await deleteAppointment(item.id)

      location.reload()
      return response.data
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      {!onEdit ? (
        <Card className="cardIndvContainer" sx={{
        }}>
          <CardContent
            className="fields"
            sx={{ backgroundColor: "rgb(7, 150, 151)", color: "white",
            borderRadius: "20px", display: "flex",
            fontSize: "18px",
            flexDirection: "column",
            alignItems: "space-evenly",
            justifyContent: "start",
            flexWrap: "wrap",
            gap: '10px'}}
          >
            {<h6> Start date</h6>}
            <div style={{ background: "white", color: "black", textAlign: "left", height: "50px", borderRadius: "20px", padding: "10px 10px 10px 10px" }}>
              {datetime}
            </div>
            {<h6>locate </h6>}
            <div style={{ background: "white", color: "black", textAlign: "left", height: "50px", borderRadius: "20px", padding: "10px 10px 10px 10px" }}>
              {locate}
            </div>
            {<h6>Specialist </h6>}
            <div style={{ background: "white", color: "black", textAlign: "left", height: "50px", borderRadius: "20px", padding: "10px 10px 10px 10px" }}>
              {specialist}
            </div>
            {<h6>Description</h6>}
            <div style={{ background: "white", color: "black", textAlign: "left", height: "50px", borderRadius: "20px", padding: "10px 10px 10px 10px" }}>
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
        <Card className="cardIndvContainer" sx={{ borderRadius: "20px", color: "white" }}>
          <CardContent
            className="fields"
            sx={{ backgroundColor: "lightblue", color: "white" }}
          >
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins", color: "white" }}
              type="datetime"
              className="field"
              defaultValue={datetime}
              label="Date/ Hour"
              onChange={(e) => setDatetime(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins", color: "white" }}>Date/Hour</Typography>
            </TextField>
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins", color: "white" }}
              type="text"
              className="field"
              defaultValue={locate}
              label="locate"
              onChange={(e) => setLocate(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins", color: "white" }}>locate</Typography>
            </TextField>
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins", color: "white" }}
              type="text"
              className="field"
              defaultValue={specialist}
              label="Specialist"
              onChange={(e) => setSpecialist(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins", color: "white" }}>specialist</Typography>
            </TextField>
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins", color: "white" }}
              type="text"
              className="field"
              defaultValue={description}
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins", color: "white" }}>
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
  )
}

export default OneMeet
