import React from 'react';
import SimpleCard from './SimpleCard';
import { Box, Container, Grid, Typography } from '@mui/material';
import BroadScope from "../assets/card1.jpg"
import widelycity from "../assets/widely city.jpeg"
import indexed from "../assets/indexed.png"
import reviewed from "../assets/reviewed.jpg"

const cardData = [
  {
    image: BroadScope,
    title: 'Broad Scope',
    description: 'Journal covers almost all fields of Engineering, Applied Science.....',
  },
  {
    image: widelycity,
    title: 'Widely Cited',
    description: 'Open access means that your work will always be freely available to the world..',
  },
  {
    image: indexed,
    title: 'Indexed',
    description: 'Increase visibility, availability, and readership of your work on',
  },
  {
    image: reviewed,
    title: '10 Peer-Reviewed',
    description: 'All articles are evaluated using criteria including the excellence',
  },
  // Add more cards as needed
];

const CardGrid = () => {
  return (
    <Box sx={{backgroundColor:"#67A9F7", padding: 4,marginTop: 2}}>
    <Container >
        <Typography variant="h4" marginBottom={"20px"}>
        WHY PUBLISH IN IOT?
        </Typography>
      <Grid container spacing={1}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <SimpleCard 
              image={card.image} 
              title={card.title} 
              description={card.description} 
            />
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
};

export default CardGrid;
