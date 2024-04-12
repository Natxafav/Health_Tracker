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
        <Card className="cardIndvContainer" sx={{ borderRadius: "20px" }}>
          <CardContent
            className="fields"
            sx={{ backgroundColor: "blue", color: "white" }}
          >
          
            {<h6> Start date: {datetime}</h6>}
            {<h6>locate: {locate}</h6>}
            {<h6>Specialist: {specialist}</h6>}
            {<h6>Description: {description}</h6>}

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
              type="text"
              className="field"
              defaultValue={ locate}
              label="locate"
              onChange={(e) => setLocate(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins" }}>locate</Typography>
            </TextField>
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins" }}
              type="text"
              className="field"
              defaultValue={specialist}
              label="Specialist"
              onChange={(e) => setSpecialist(e.target.value)}
            >
              <Typography sx={{ fontFamily: "poppins" }}>specialist</Typography>
            </TextField>
            <TextField
              sx={{ margin: "10px", fontFamily: "poppins" }}
              type="text"
              className="field"
              defaultValue={description}
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
  )
}

export default OneMeet
