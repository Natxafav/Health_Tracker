import React from "react";
import { Card, CardContent, CardHeader } from '@mui/material';
import "./cardIndv.css";

const CardIndv = ({ item }) => {
    const date = new Date(item.datetime)
    const year = date.getFullYear(item.datetime)
    const month = (date.getMonth(item.datetime)+1).toLocaleString().padStart(2, "0")
    const day = date.getDate(item.datetime).toLocaleString().padStart(2, "0") 
    const time = `${date.getHours(item.datetime)}:${date.getMinutes(item.datetime).toLocaleString().padStart(2, "0")}:00`
    
    const dateEnd = new Date(item.end)
    const yearnd = dateEnd.getFullYear(item.end)
    const monthnd = (dateEnd.getMonth(item.end)+1).toLocaleString().padStart(2, "0")
    const daynd = dateEnd.getDate(item.end).toLocaleString().padStart(2, "0") 
    const timend = `${dateEnd.getHours(item.end)}:${dateEnd.getMinutes(item.end).toLocaleString().padStart(2, "0")}:00`

  return (
    
      <Card className="cardIndvContainer" sx={{ borderRadius: "20px", width: "900px", marginBottom:"20px"}}>
        <CardHeader title="Tasks" sx={{ color: "white", backgroundColor: 'rgb(7, 150, 151)' }} />

        <CardContent className="fields" sx={{ color: "black" }}>

          {item.locate && <p >{item.locate}</p>}
          {item.name && <p>Name: {item.name}</p>}
          {item.datetime && <p id="start">Start: {time}</p>}
          {item.specialist && <p>{item.specialist}</p>}
          {item.posology && <p id="posology">Posology: {item.posology}</p>}
          {item.end && <p id="end">End: {timend}</p>}
          {item.description && <p>description: {item.description}</p>}
        </CardContent>
      </Card>
  );
}



export default CardIndv;
