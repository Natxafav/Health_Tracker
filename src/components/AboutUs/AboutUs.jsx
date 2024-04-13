import React, { useState } from 'react'
import { Button, Card, CardContent, TextField } from '@mui/material';
import './aboutUs.css'

const AboutUs = () => {

const [text, setText]= useState(false)

const text1= 'Heath Tracker.'
const text2='Here to help.' 
const text3='Gracias!'
    
  return (
    <Card onMouseOver={()=>{setText(true)}} onMouseOut={()=>{setText(false)}} className='cardContainerMain' >

          {text? <h1>{text2}</h1>: <h1>{text1}</h1>}
    </Card>
  )
}

export default AboutUs