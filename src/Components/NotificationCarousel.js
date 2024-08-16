import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box } from '@mui/material';

function NotificationCarousel() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate fetching notifications with images
    setTimeout(() => {
      setNotifications([
        {
          title: "Discount ",
          description: "Discount 25% .",
          imageUrl: "https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "New Feature Release",
          description: "Check out the new dashboard feature available now!",
          imageUrl: "https://plus.unsplash.com/premium_photo-1671076131210-5376fccb100b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Special Announcement",
          description: "Holiday sale! Get up to 50% off on select products.",
          imageUrl: "https://plus.unsplash.com/premium_photo-1682309524785-cf2288f7b544?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
      ]);
    }, 1000);
  }, []);

  return (
    <>
    
      {notifications.length > 0 && (
        <Box sx={{ maxWidth: '100%', margin: '20px 0' }}>
          <Carousel
            autoPlay
            animation="slide"
            indicators={notifications.length > 1} // Show indicators only if there's more than one notification
            navButtonsAlwaysVisible={notifications.length > 1} // Show navigation buttons only if there's more than one notification
            navButtonsProps={{
              style: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
              }
            }}
          >
            {notifications.map((notification, index) => (
              <Paper
                key={index}
                sx={{
                  position: 'relative',
                  backgroundColor: '#1976d2',
                  textAlign: 'center',
                  color: 'white',
                  overflow: 'hidden',
                  padding: 0, // Remove padding to make the image cover the slide
                }}
              >
                <img
                  src={notification.imageUrl}
                  alt={notification.title}
                  style={{
                    width: '100%',
                    height: '300px', // Adjust height as needed
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add overlay to make text more readable
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h5" component="h3" sx={{ color: 'white' }}>
                    {notification.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', marginTop: '10px' }}>
                    {notification.description}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Carousel>
        </Box>
      )}
    </>
  );
}

export default NotificationCarousel;
