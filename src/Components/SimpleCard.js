import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const SimpleCard = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" marginBottom={"10px"} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
