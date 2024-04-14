import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { updateUserRoleId } from "../../services/user";

function FamilyChoice() {
  const navigate = useNavigate();

    const handleCreateFamily = async () => {
        try {

            if (!localStorage.getItem('roleId') || localStorage.getItem('roleId') ==='null') {   
                         
                localStorage.setItem('roleId', '2');
                await updateUserRoleId(localStorage.getItem('roleId'));
            }
            navigate('/family/create');
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

  const handleRequestAccess = () => {
    navigate("/home");
  };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Elige una opción
            </Typography>
            <Button variant="contained" color="primary" onClick={() => handleCreateFamily()} fullWidth>
                Crear una nueva familia
            </Button>
           {/*  <Button variant="contained" color="primary" onClick={()=>handleRequestAccess()} fullWidth>
                Solicitar acceso a una familia existente
            </Button> */}
        </Container>
    );
}

export default FamilyChoice;
