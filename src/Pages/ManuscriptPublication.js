import React from 'react';
import { Container, Typography, Accordion, AccordionDetails, List, ListItem, FormControl, Select, MenuItem, Button, Box } from '@mui/material';

const ManuscriptPublication = () => {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Accordion>
        <Box
        sx={{padding: 4}}
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">IOSR Manuscript Handling Charges</Typography>
        </Box>
        <AccordionDetails>
          <Typography variant="body1" paragraph>
            <strong>IOSR Journals</strong> is a self-supporting organization and does not receive funding from any institution or government. Hence, the operation of the journal is solely financed by the processing fees received from authors. The processing fees are required to meet operations expenses such as employees, salaries, internet services, electricity, etc.
          </Typography>
          <Typography variant="body1" paragraph>
            Being an Open Access Journal, IOSR Journals does not receive payment for subscriptions as the journals are freely accessible over the internet. It costs money to produce a peer-reviewed, edited, and formatted article that is ready for online publication, and to host it on a server that is freely accessible without barriers around the clock. We ask that, as a small part of the cost of doing the research, the author, institution, or funding agency pays a modest fee to help cover the actual cost of the essential final step, the publication.
          </Typography>
          <Typography variant="h6" align="justify" color="error">
            Manuscript Handling Charges: 3200 INR / 75 USD
          </Typography>
          <Typography variant="h6" align="justify" color="info.main">
            If author wants a hard copy of the Journal, they are required to pay extra charges: 600 INR / 45 USD
          </Typography>
          <Typography variant="body1" paragraph>
            Above fees include all review, publication, indexing, and certificates hard copy charges. There are no hidden extra charges.
          </Typography>
          <Typography variant="h6" align="justify" color="error">
            How to deposit fees:
          </Typography>
          <Typography variant="h6" align="justify" color="info.main">
            1. If you belong to China/India/Australia/New Zealand/Thailand, you can deposit fees by choosing any one of the following options:
          </Typography>
          <List sx={{ fontSize: '14px', paddingLeft: 2 }}>
            <ListItem>Depositing fees directly by the nearest bank branch to the account given in the acceptance letter.</ListItem>
            <ListItem>By your Net banking account to the account given in the acceptance letter.</ListItem>
          </List>
          <Typography variant="body1" paragraph>
            Authors from Australia/China/India/New Zealand/Thailand cannot pay by PayPal.
          </Typography>
          <Typography variant="h6" align="justify" color="info.main">
            2. Online Registration Payment - Authors from all other countries can pay by their Master card/ debit card/credit card/Visa card here…
          </Typography>
          <Typography variant="h6" align="justify" color="error">
            Fees through PayPal:
          </Typography>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="786N8CVA2XUGC" />
            <FormControl fullWidth sx={{ marginY: 2 }}>
              <Select
                name="os0"
                defaultValue="Only online publication"
                displayEmpty
              >
                <MenuItem value="Online & Print both publication">Online & Print both publication - $120.00 USD</MenuItem>
                <MenuItem value="Only online publication">Only online publication - $75.00 USD</MenuItem>
              </Select>
            </FormControl>
            <input type="hidden" name="currency_code" value="USD" />
            <Button variant="contained" type="submit" color="primary">
              Pay with PayPal
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default ManuscriptPublication;

