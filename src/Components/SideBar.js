import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'

const SideBar = () => {
  return (
    <>
    <Box>
        <Typography variant='h5' marginBottom={"10px"}  >
            Jounral List
        </Typography>
        <List>
          <ListItem >Item 1</ListItem>
          <ListItem >Item 2</ListItem>
          <ListItem >Item 3</ListItem>
        </List>
        </Box></>
  )
}

export default SideBar