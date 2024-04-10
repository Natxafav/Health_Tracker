import React from 'react'

const OneMed = () => {






  
  return (
    <div><CardActions
    className="btncontainer"
    sx={{ display: "flex", justifyContent: "end" }}
  >
   
    <Button
      variant="outlined"
      onClick={() =>handleModify() }
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
  </CardActions></div>
  )
}

export default OneMed