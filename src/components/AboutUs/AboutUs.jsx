import { useState } from 'react'
import {Card} from '@mui/material';
import './aboutUs.css'

const AboutUs = () => {

const [text, setText]= useState(false)

const text1= 'Health Tracker'
const text2='Here to help' 
    
  return (
    <Card onMouseOver={()=>{setText(true)}} onMouseOut={()=>{setText(false)}} className='cardContainerMain' >

          {text? <h1>{text2}</h1>: <h1>{text1}</h1>}
    </Card>
  )
}

export default AboutUs