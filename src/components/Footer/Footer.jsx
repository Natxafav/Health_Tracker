import React from 'react'
import './Footer.css'
import { Box, Typography } from '@mui/material'
function Footer() {
    return (
        <div className='footer'>
    <Box sx={{bottom:'15px',/*  position:'fixed', */ width:'100%' }}>
        <Typography variant='h6'>&copy;Health Tracker 2024 by @AlbertOR0994  and @Natxafav </Typography>
    </Box>
        </div>
    )
}

export default Footer
