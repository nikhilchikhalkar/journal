import React from 'react';
import { Box, Typography, List, ListItem, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckSquareIcon from '@mui/icons-material/CheckBox';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PublishIcon from '@mui/icons-material/Publish';
import SendIcon from '@mui/icons-material/Send';

function PublicationProcess() {
  return (
    <Box id="myfeature-list" width={"100%"} marginX={"auto"} p={1}>
      <Typography variant="h6" textAlign="left" fontSize={{ xs: 16, sm: 18, md: 20 }} gutterBottom>
        Publication Process
      </Typography>
      <Box className="scrolling" overflow="auto">
        <List
          className="clearfix"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'nowrap', // Ensures items stay in a single row
            overflowX: 'auto',  // Adds horizontal scrolling if needed
            padding: 0,
            // gap: 2, // Adds spacing between items
          }}
        >



          {/* Submit Article */}
          <ListItem
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              // minWidth: { xs: '50px', sm: '80px' },
              // borderRadius: '10px',
              // border: '4px solid #f87806',
              p: 1,
              boxSizing: 'border-box',
            }}
          >
            <IconButton 
            // href="how-to-submit.html"
             title="Apply Online" sx={{borderRadius: '10px',
              border: '4px solid #f87806',margin:'10px', padding:'14px'}}>
              <CloudUploadIcon fontSize="large" sx={{ color: '#f87806' }} />
            </IconButton>
            <Typography 
            fontSize={{ xs: '0.7rem', sm: '0.8rem' }}
            >Submit Article</Typography>
          </ListItem>

          {/* Arrow with 3 Days */}
          <ListItem
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              // minWidth: '30px',
              width:'50%'
              // marginX: { xs: 1, sm: 2 },
            }}
          >
            <IconButton title="Find Courses">
              <ArrowForwardIcon fontSize="large" sx={{ color: 'black' }} />
            </IconButton>
            <Typography fontSize={{ xs: '0.9rem', sm: '1rem' }} sx={{ color: '#f87806' }}>
            2 - 3 months
            </Typography>
          </ListItem>

          {/* Review Process */}
          <ListItem
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              // minWidth: { xs: '50px', sm: '80px' },
              // borderRadius: '10px',
              // border: '4px solid #ED027B',
              p: 1,
              boxSizing: 'border-box',
            }}
          >
            <IconButton 
            // href="reviewprocess.html"
            sx={{borderRadius: '10px',
              border: '4px solid #ED027B',margin:'10px', padding:'14px'}}
             title="Find Courses">
              <CheckSquareIcon fontSize="large" sx={{ color: '#ED027B' }} />
            </IconButton>
            <Typography  fontSize={{ xs: '0.7rem', sm: '0.8rem' }}>Review Process</Typography>
          </ListItem>

          {/* Arrow */}
          <ListItem
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              // minWidth: '30px',
            width:'50%'
            //   marginX: { xs: 1, sm: 2 },
            }}
          >
            <IconButton title="Find Courses">
              <ArrowForwardIcon fontSize="large" sx={{ color: 'black' }} />
            </IconButton>
            <Typography fontSize={{ xs: '0.9rem', sm: '1rem' }}>&nbsp;</Typography>
          </ListItem>

          {/* Pay Fees */}
          <ListItem
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              // minWidth: { xs: '50px', sm: '80px' },
              // borderRadius: '10px',
              // border: '4px solid #00BFE7',
              p: 1,
              boxSizing: 'border-box',
            }}
          >
            <IconButton href="how-to-pay-fees.html" title="Schools" sx={{  borderRadius: '10px',
              border: '4px solid #00BFE7',margin:'10px', padding:'14px'}}>
              <CreditCardIcon fontSize="large" sx={{ color: '#00BFE7' }} />
            </IconButton>
            <Typography  fontSize={{ xs: '0.7rem', sm: '0.8rem' }}>Pay Fees</Typography>
          </ListItem>

          {/* Arrow with 2 Days */}
          <ListItem
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              // minWidth: '30px',
              width:'50%'
            //   marginX: { xs: 1, sm: 2 },
            }}
          >
            <IconButton title="Find Courses">
              <ArrowForwardIcon fontSize="large" sx={{ color: 'black' }} />
            </IconButton>
            <Typography fontSize={{ xs: '0.9rem', sm: '1rem' }} sx={{ color: '#f87806' }}>
            2 - 3 months
            </Typography>
          </ListItem>

          {/* Publish Online */}
          <ListItem
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              // minWidth: { xs: '50px', sm: '80px' },
              // borderRadius: '10px',
              // border: '4px solid #ED027B',
              p: 1,
              boxSizing: 'border-box',
            }}
          >
            <IconButton href="how-to-submit.html" title="Leadership" sx={{borderRadius: '10px',
              border: '4px solid #ED027B',margin:'10px', padding:'14px'}} >
              <PublishIcon fontSize="large" sx={{ color: '#ED027B' }} />
            </IconButton>
            <Typography  fontSize={{ xs: '0.7rem', sm: '0.8rem' }}>Publish Online</Typography>
          </ListItem>

          {/* Arrow with 3 Days */}
          <ListItem
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              // minWidth: '30px',
              width:'50%'
            //   marginX: { xs: 1, sm: 2 },
            }}
          >
            <IconButton title="Find Courses">
              <ArrowForwardIcon fontSize="large" sx={{ color: 'black' }} />
            </IconButton>
            <Typography fontSize={{ xs: '0.9rem', sm: '1rem' }} sx={{ color: '#f87806' }}>
              2 - 3 months
            </Typography>
          </ListItem>

          {/* Dispatch Copy */}
          <ListItem
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              // minWidth: { xs: '50px', sm: '80px' },
              // borderRadius: '10px',
              // border: '4px solid #00C1A1',
              p: 1,
              boxSizing: 'border-box',
            }}
          >
            <IconButton title="Scholarship" sx={{borderRadius: '10px',
              border: '4px solid #00C1A1', margin:'10px', padding:'14px'}}>
              <SendIcon fontSize="large" sx={{ color: '#00C1A1' }} />
            </IconButton>
            <Typography  fontSize={{ xs: '0.7rem', sm: '0.8rem' }}>Dispatch Copy</Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default PublicationProcess;
