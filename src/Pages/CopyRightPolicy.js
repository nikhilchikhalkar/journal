import React from 'react';
import { AccordionDetails, Typography, Box, Link, Grid } from '@mui/material';
import SideBar from '../Components/SideBar';
// import Banner from '../Components/Banner';

const CopyrightPolicy = () => {
  return (
    <>
{/* <Banner title="Copyright-Policy"/> */}
<Grid container justifyContent={"center"} marginX={"auto"}   sx={{overflow:"auto", gap:"10px"}} marginTop={"10px"}  height="100vh">
      {/* Left Side List */}
      <Grid item xs={12} sm={2} marginBottom={"auto"}  bgcolor="#00C1A1" color={'white'} borderRadius={"10px"} p={2}>
        <SideBar/>
      </Grid>

      {/* Right Side Content */}
      <Grid item xs={12} sm={8} overflow={"hidde"} flexGrow={1} p={2} borderRadius={"10px"} bgcolor="#f5f5f5" marginx={"auto"} >
      <Box sx={{ padding: 3 }}>
      <Box>
        <Box
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" component="div" color="info.main">
            Copyright Policy:
          </Typography>
        </Box>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journals provide immediate open access to its content on the principle that making research freely available to the public supports a greater global exchange of knowledge. This journal is licensed under a&nbsp;
            <Link href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">
              Creative Commons Attribution-NonCommercial 4.0 International License
            </Link>. This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge & be non-commercial, they don’t have to license their derivative works on the same terms.
          </Typography>
          <Typography variant="body1" paragraph>
            Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journals Open Access articles are distributed under this Creative Commons Attribution-Noncommercial 4.0 International License (CC BY-NC). Articles can be read and shared for noncommercial purposes under the following conditions:
          </Typography>
          <Box sx={{ fontSize: '14px', fontWeight: 'bold', marginBottom: 2 }}>
            <ul>
              <li>BY: Attribution must be given to the original source (Attribution)</li>
              <li>NC: Works may not be used for commercial purposes (Noncommercial)</li>
            </ul>
          </Box>
          <Typography variant="body1" paragraph>
            Asian Journal of Chemistry uses the CC BY-NC to <strong>protect the author's work from misuse</strong>.
          </Typography>
          <Box>
            <Box
            //   expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6" component="div" padding={"2px"} color="info.main">
                Copyright Infringement Claims:
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" paragraph>
                Any claims of copyright infringement should be addressed to the Editor at <strong style={{ color: '#06F' }}>support@Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI)mail.org</strong> bearing the subject line "Copyright Infringement".<br />
                The claim must be supported by documented evidence proving that the version being published or copyrighted or patented by the aggrieved party existed before the date of publication of the concerned Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journals article. On receipt of the claim, the Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journals Board, if deemed appropriate, shall inform the Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journals author to provide an explanation; the discussion of which shall be transparent to both parties.
              </Typography>
              <Typography variant="body1" paragraph>
                The Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journals Board reserves the sole rights to decide the validity of any such claims. After deliberation, if the claim is found justified, the concerned manuscript will be removed from all Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) Journals archives and servers. Any subsequent print copies of the concerned issue will not contain the article. In case the required changes are minimal, such as inclusion of references, the authors will be intimated to do the required amendments according to the&nbsp;
                <Link href="https://www.ijcaonline.org/?option=com_content&amp;view=article&amp;id=762" target="_blank" rel="noopener noreferrer">
                  Journal of Innovative Tehcnologies based on Artificial Intelligence (JIT-AI) article correction policies
                </Link>. The alternative version shall undergo peer-review as any other general submission and shall be published in the same issue (number) of the concerned volume.
              </Typography>
              <Typography variant="body1" paragraph>
                Any claims on copyright will be addressed with the highest priority. A revert mail will be dispatched within 3 working days provided the claim is supported with documented evidence.
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Box>
    </Box> 
      </Grid>
    </Grid>
   
    
    </>
  );
};

export default CopyrightPolicy;
