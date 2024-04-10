import React from 'react'
import CardIndv from '../../components/CardIndv/CardIndv'
import { Button, Grid, TextField } from "@mui/material";



const Meds = () => {


        const familyMeds = async ()=>{
          try {
            const res = await getAllMedicationsUser()
            console.log(res.data)
            return res.data
          } catch (error) {
            throw error
          }
        }






  return (
    <Grid container columnSpacing={1} rowSpacing={1}>

        <Grid item xs={12} md={11} lg={11} columnSpacing={1} rowSpacing={1}>
         {/*  {familyMeds && familyMeds.map((med, idx)=>{
            return <CardIndv key={idx} item={med} />
          })} */}
  
        </Grid>

        <Grid item xs={12} md={11} lg={11} columnSpacing={1} rowSpacing={1}>
  
        </Grid>



    </Grid>



  )/CardIndv 
}

export default Meds