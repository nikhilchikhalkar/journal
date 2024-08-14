import React from 'react';
import { Grid, Typography, Link, Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SideBar from '../Components/SideBar';

const Article = () => {
  return (
    <>
      <Grid container justifyContent={"center"} marginX={"auto"} sx={{ overflow: "auto", gap: "10px" }} marginTop={"10px"} height="100vh">
        {/* Left Side List */}
        <Grid item xs={12} sm={2} marginBottom={"auto"} bgcolor="#00C1A1" color={'white'} borderRadius={"10px"} p={2}>
          <SideBar />
        </Grid>

        {/* Right Side Content */}
        <Grid item xs={12} sm={8} overflow={"hidden"} flexGrow={1} p={2} borderRadius={"10px"} bgcolor="#f5f5f5" marginX={"auto"}>
          <Box sx={{ position: "sticky", top: 0, zIndex: 1000, backgroundColor: "#f5f5f5", padding: "8px 0" }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: 1,
                padding: '2px 4px',
                border: '1px solid #ccc',
              }}
            >
             
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search articles"
                inputProps={{ 'aria-label': 'search articles' }}
              />
               <IconButton sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <Grid container spacing={2} className="result-item-align" sx={{ padding: '16px' }}>
              <Grid item xs={12}>
                <Typography variant="h6" component="div" fontWeight="bold">
                  <Link href="/document/10444026/" underline="none">
                    Suitable Innovation in Industry 5.0: The Moderating Mechanism of Innovation Transmission Types in Innovation Ecosystem
                  </Link>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1"> Authors:-
                  <Link href="/author/37089987015" underline="hover"> Jiahui Li</Link>;
                  <Link href="/autherprofile" underline="hover"> Baiqing Sun</Link>;
                  <Link href="/author/37308401400" underline="hover"> Bo Yu</Link>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Link href="" underline="hover">JIT Transactions on Engineering Management</Link>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body2" component="div">
                  Year: 2024
                  <Box component="span" sx={{ mx: 1 }}>|</Box>
                  <Link href="" underline="hover">Volume: 71</Link>
                  <Box component="span" sx={{ mx: 1 }}>|</Box>
                  Journal Article
                  <Box component="span" sx={{ mx: 1 }}>|</Box>
                  Publisher: JIT
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body2">
                  Cited by: <Link href="" underline="hover">Papers (1)</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Article;
