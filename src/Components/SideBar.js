import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
    <Box>
        <Typography variant='h5' marginBottom={"10px"}  >
            Issues List
        </Typography>
        <List>
          <ListItem > <Link to="/article" style={{textDecoration:'none', color:'white'}}> Septembar 2024</Link> </ListItem>
          <ListItem > <Link to="/article" style={{textDecoration:'none', color:'white'}}> December 2025</Link> </ListItem>
          <ListItem > <Link to="/article" style={{textDecoration:'none', color:'white'}}> April 2025</Link> </ListItem>
        </List>
        </Box></>
  )
}

export default SideBar