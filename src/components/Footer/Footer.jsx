import React from 'react'
import './Footer.css'
import { Box, Typography } from '@mui/material'
function Footer() {
    return (
        <div className='footer' >
    <Box className="BoxFooter" sx={{bottom:'5px',width:'100%', height:"50px", lineHeight:"100px" }}>
        <Typography variant='h5' sx={{bottom:'5px',width:'100%', height:"50px", lineHeight:"50px" }}>&copy;Health Tracker 2024 by @AlbertOR0994  and @Natxafav </Typography>
    </Box>
        </div>
    )
}

export default Footer
