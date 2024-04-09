import React, { useState } from 'react';
import { Button, Card, CardContent, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createFamily } from '../../services/family';



const FamilyData = () => {
    const [familyName, setFamilyName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {                   
             
         const newFamily = await createFamily(familyName);                      
        if(newFamily){
            navigate('/home');

        }else {
            alert('Opss ha habido un fallo')
        }
        } catch (error) {
            console.error('Error creating family:', error);
        }
    };

    return (
        <div className="family">
            <Card className="main" sx={{ borderRadius: "20px" }}>
                <CardContent className="fields">
                    <TextField
                        sx={{ margin: "10px", fontFamily: "poppins" }}
                        className="field"
                        placeholder="Family Name"
                        value={familyName}
                        onChange={(e) => setFamilyName(e.target.value)}
                    />
                </CardContent>
                <div className="btncontainer">
                    <Button
                        className="btn"
                        onClick={(e) => {
                            handleSubmit(e);
                        }}
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
                        Create
                    </Button>
                    <Button
                        onClick={() => navigate('/signup')}
                        className="btn"
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
                </div>
            </Card>
        </div>
    );
};

export default FamilyData;
