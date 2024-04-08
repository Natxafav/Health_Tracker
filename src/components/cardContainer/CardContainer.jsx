import React from "react";
import {  Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';

import CardIndv from "../CardIndv/CardIndv";
import "./cardContainer.css";

const CardContainer = () => {
    const data = [
      {
        locate: "here", 
        specialist: "CCardiologiy",
      },
      {
        name: "name", 
        datetime: "2001-01-01",
      },
    ];
  
    return (
      <div className="cardContainerMain">
        <Card className="cardContainer" sx={{ borderRadius: "20px" }}>
          <CardHeader title="Medication" sx={{ color: 'white' }} />
  
          <CardContent className="cardContainerFields" sx={{ color: 'white' }}>
  
            <h1>Estas en cardContainer</h1>
          
  
            {data.map((item, idx) => (
              <CardIndv key={idx} item={item} />
            ))}
          </CardContent>
        </Card>
      </div>
    );
  };
  

export default CardContainer;
