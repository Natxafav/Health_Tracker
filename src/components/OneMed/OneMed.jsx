import React from "react";

const OneMed = ({item}) => {
  return (
    <Card className="cardIndvContainer" sx={{ borderRadius: "20px" }}>
      <CardHeader title="data" sx={{ color: "white" }} />

      <CardContent
        className="fields"
        sx={{ backgroundColor: "blue", color: "white" }}
      >
        
        {item.name && <p>Medication: {item.name}</p>}
        {item.datetime && <p> Start date: {item.datetime}</p>}   
        {item.posology && <p>Posology: {item.posology}</p>}
        {item.end && <p>End date: {item.end}</p>}
        {item.description && <p>Description: {item.description}</p>}
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
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default OneMed;
