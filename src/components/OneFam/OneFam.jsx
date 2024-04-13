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
import "../../pages/FamilyData/familyData.css"
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
      <CardContent className="cardIndvContainer" sx={{ borderRadius: "20px" }}>
        <CardContent
          className="fields"
          sx={{ backgroundColor: "blue", color: "white" }}
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
        
         {/*  <Button
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
          </Button> */}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default OneFam;
