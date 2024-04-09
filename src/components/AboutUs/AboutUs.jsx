import React, { useState } from 'react'
import { Button, Card, CardContent, TextField } from '@mui/material';
import './aboutUs.css'

const AboutUs = () => {

const [text, setText]= useState(false)

const text1= 'dfadfsdfasdfasdfdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf'
const text2='d88888888888888888888888'
    
  return (
    <Card onMouseOver={()=>{setText(true)}} onMouseOut={()=>{setText(false)}} className='cardContainerMain' >

          {text? <h1>{text2}</h1>: <h1>{text1}</h1>}
    </Card>
  )
}

export default AboutUs