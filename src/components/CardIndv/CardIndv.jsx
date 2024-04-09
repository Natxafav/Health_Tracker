import React from "react";
import { Card, CardContent, CardHeader } from '@mui/material';
import "./cardIndv.css";

const CardIndv = ({ item }) => {
  return (
    
      <Card className="cardIndvContainer" sx={{ borderRadius: "20px" }}>
        <CardHeader title="data" sx={{ color: "white" }} />

        <CardContent className="fields" sx={{ backgroundColor: 'blue', color: "white" }}>
        
          {item.locate && <p>{item.locate}</p>}
          {item.name && <p>{item.name}</p>}
          {item.datetime && <p> {item.datetime}</p>}
          {item.date && <p>{item.date}</p>}
          {item.specialist && <p>{item.specialist}</p>}
          {item.posology && <p>{item.posology}</p>}
          {item.end && <p>{item.end}</p>}
          {item.description && <p>{item.description}</p>}
        </CardContent>
      </Card>
   
  );
};

export default CardIndv;
