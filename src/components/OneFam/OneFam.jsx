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
import { deleteFamilyUser, updateFamily } from "../../services/family";
import './OneFam.css'

const OneFam = ({ item, handleReload }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [name, setName] = useState(item.name);
  const [lastname, setLastname] = useState(item.lastname);
  const [phone, setPhone] = useState(item.phone);
  

  const handleOnEdit = () => {
    setOnEdit(!onEdit);
  };

 
 /*  const handleDelete = async () => {
    try {
      const response = await deleteFamilyUser(item.id);
      location.reload();
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }; */

  return (
    <Card>
      <CardContent className="cardIndvContainer" sx={{ borderRadius: "20px" , border: 'none'}}>
        <CardContent
          className="fields"
          sx={{ backgroundColor: "rgb(7, 150, 151)", color: "white", borderRadius: '20px', fontWeight:"800"}}
        > 
        <div className={item.name}></div>
        {
          <p>{item.name}</p>}
        {<p>Phone: {phone}</p>}
        </CardContent>
        <CardActions
          className="btncontainer"
          sx={{ display: "flex", justifyContent: "end" }}
        >
        {/* {<Button
            onClick={() => handleDelete()}
            variant="outlined"
            sx={{
              color: "white",
              backgroundColor: "lightblue",
              fontFamily: "poppins",
              ":hover": {
                backgroundColor: "skyblue",   
                color: "black",
                fontWeight:"800",
                boxShadow: "5px -2px 15px",
              },
            }}
          >
            Delete
          </Button> }
          {<Button
            onClick={() => handlUpdate()}
            variant="outlined"
            sx={{
              color: "white",
              backgroundColor: "lightblue",
              fontFamily: "poppins",
              ":hover": {
                backgroundColor: "skyblue",   
                color: "black",
                fontWeight:"800",
                boxShadow: "5px -2px 15px",
              },
            }}
          >
            Update
          </Button> } */}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default OneFam;
