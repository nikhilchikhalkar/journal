import { Box, Grid } from '@mui/material'
import React from 'react'
import SideBar from '../Components/SideBar'
import HowToApply from '../Components/HowToApply'

const ReviewProcess = () => {
  return (
    <>
     <Grid container justifyContent={"center"} marginX={"auto"}   sx={{overflow:"auto", gap:"10px"}} marginTop={"10px"}  height="100vh">
      {/* Left Side List */}
      <Grid item xs={12} sm={2} marginBottom={"auto"}  bgcolor="#00C1A1" color={'white'} borderRadius={"10px"} p={2}>
        <SideBar/>
      </Grid>

      {/* Right Side Content */}
      <Grid item xs={12} sm={8} overflow={"hidde"} flexGrow={1} p={2} borderRadius={"10px"} bgcolor="#f5f5f5" marginx={"auto"} >
      <Box>
        <HowToApply/>
      </Box>
      </Grid>
    </Grid>
    </>
  )
}

export default ReviewProcess