import React from 'react'
import PublicationProcess from '../Components/PublicationProcess'
import { Box } from '@mui/material'
import MainSection from '../Components/LatestNews'
import About from '../Components/About'
import NotificationCarousel from '../Components/NotificationCarousel'
// import Banner from '../Components/Banner'

function Home() {
  return (
    <>
        {/* <Banner/> */}
        <NotificationCarousel/>
        <Box sx={{width:'80%', marginX:"auto", alignItems:"center"}}>
        <PublicationProcess/>
        </Box>
        <MainSection/>
        <Box sx={{}}>
          <About/>
        </Box>
    </>
  )
}

export default Home