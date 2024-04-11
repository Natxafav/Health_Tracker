import React from "react";
import { Grid, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material';

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
      <Grid  className="cardContainerMain">
        <Card className="cardContainer" sx={{ borderRadius: "20px" }}>
          
  
          <CardContent className="cardContainerFields" sx={{ color: 'white' }}>  
            {data.map((item, idx) => (
              <CardIndv key={idx} item={item} />
            ))}
          </CardContent>
        </Card>
      </Grid>
    );
  };
  

export default CardContainer;
