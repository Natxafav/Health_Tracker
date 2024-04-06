
import { Button, Card, CardContent, InputAdornment, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import "@fontsource/poppins"
import {  useNavigate } from 'react-router-dom'
import {createFamily} from '../../services/family'




const FamilyData = () => {
    const [familyName, setFamilyName] = useState('') 
    const navigate = useNavigate();

    const handleSubmit = async () => {
       
        try {
          const newFamily = await createFamily(familyName);
          console.log('New family created:', newFamily);
          navigate("/home");
        
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
                        onChange={(e) => setFamilyName(e.target.value)}
                       
                    >
                        <Typography sx={{ fontFamily: "poppins" }}>Family Name</Typography>
                    </TextField>
                   
                </CardContent>
                <div className="btncontainer">
                    <Button
                        className="btn"
                        onClick={() => {
                            handleSubmit();
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
                        Register
                    </Button>
                        <Button
                            onClick={() => {navigate('/signup')}}
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
}




export default FamilyData