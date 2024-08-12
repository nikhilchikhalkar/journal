import React from 'react';
import SimpleCard from './SimpleCard';
import { Box, Container, Grid, Typography } from '@mui/material';

const cardData = [
  {
    image: 'https://www.iosrjournals.org/imgs/IMG-20190731-WA0018.jpg',
    title: 'Card Title 1',
    description: 'This is a description for card 1.',
  },
  {
    image: 'https://www.iosrjournals.org/imgs/ack.jpeg',
    title: 'Card Title 2',
    description: 'This is a description for card 2.',
  },
  {
    image: 'https://www.iosrjournals.org/imgs/review.png',
    title: 'Card Title 3',
    description: 'This is a description for card 3.',
  },
  {
    image: 'https://www.iosrjournals.org/imgs/iosr-print-version1.jpg',
    title: 'Card Title 3',
    description: 'This is a description for card 3.',
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
