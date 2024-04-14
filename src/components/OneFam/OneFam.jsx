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
    <Card  className="cardIndvContainer" sx={{ borderRadius: '20px',width:"24%", height:"40%", 
    }}>
        <CardContent
          className="fields"
          sx={{ backgroundColor: "rgb(7, 150, 151)", color: "white", borderRadius: '20px', fontWeight:"800", height:"100%", width:"90%",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}
        > 
        <div className={item.name}></div>
        {
          <p>{item.name}</p>}
        {<p>Phone: {phone}</p>}
        </CardContent>
            
    </Card>
  );
};

export default OneFam;
