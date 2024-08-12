import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, useTheme, useMediaQuery, List, ListItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HowToApply = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ padding: isMobile ? '10px' : '20px' }}>
      <Typography variant={isMobile ? 'h6' : 'h4'} gutterBottom>
        How To Apply
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant={isMobile ? 'h6' : 'h5'}>
            Introduction to Peer Review
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            Peer review exists to ensure that journals publish good science. This benefits the entire scientific community.
            Sometimes scientists find the peer review process intimidating because it can lead to the rejection of their manuscript.
            Keep in mind that revisions and improvement are part of the publication process and actually help raise the quality of your manuscript.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant={isMobile ? 'h6' : 'h5'}>
            Peer Review is a Positive Process
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            Peer review is an integral part of scientific publishing that confirms the validity of the science reported.
            Peer reviewers are experts who volunteer their time to help improve the journal manuscripts they review—they offer authors free advice.
            Through the peer review process, manuscripts should become:
          </Typography>
          <List>
            <ListItem>
              <Typography variant="body2">
                <strong>More robust:</strong> Peer reviewers may point out gaps in your paper that require more explanation or additional experiments.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                <strong>Easier to read:</strong> If parts of your paper are difficult to understand, reviewers can tell you so that you can fix them.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2">
                <strong>More useful:</strong> Peer reviewers also consider the importance of your paper to others in your field.
              </Typography>
            </ListItem>
          </List>
          <Typography paragraph>
            Of course, in addition to offering authors advice, another important purpose of peer review is to make sure that the manuscripts the journal eventually publishes are of high quality. If a journal publishes too many low-quality manuscripts, its reputation and number of readers will decline.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant={isMobile ? 'h6' : 'h5'}>
            Editorial Rejection
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            Your journal manuscript can be rejected if it:
          </Typography>
          <List>
            <ListItem>Lacks proper structure</ListItem>
            <ListItem>Lacks the necessary detail for readers to fully understand the authors' analysis</ListItem>
            <ListItem>Has no new science</ListItem>
            <ListItem>Does not clearly explain which parts of the findings are new science, versus what was already known</ListItem>
            <ListItem>Lacks up-to-date references</ListItem>
            <ListItem>Contains theories, concepts, or conclusions that are not fully supported by its data, arguments, and information</ListItem>
            <ListItem>Does not provide enough details about materials and methods to allow other scientists to repeat the experiment</ListItem>
            <ListItem>Lacks clear descriptions or explanations of:
              <ul>
                <li>Hypotheses tested</li>
                <li>The experimental design</li>
                <li>Sample characteristics and descriptive statistics</li>
                <li>Describes poor experimental design, or faulty or insufficient statistical analysis</li>
                <li>Has poor language quality</li>
              </ul>
            </ListItem>
          </List>
          <Typography paragraph>
            Publication is a difficult process, and you must be prepared to defend your submission against rejection from both editors and peer reviewers. However, do not be too persistent. Generally, only one letter defending your submission will be accepted for each of the review stages (editorial review and peer review). If you are unsuccessful after sending a response letter, then you should strongly consider selecting another journal.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant={isMobile ? 'h6' : 'h5'}>
            When Revising Your Manuscript
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
            When revising your manuscript and responding to peer review comments:
          </Typography>
          <List>
            <ListItem>Address all points raised by the editor and reviewers</ListItem>
            <ListItem>Describe the revisions to your manuscript in your response letter</ListItem>
            <ListItem>Perform any additional experiments or analyses the reviewers recommend (unless you feel that they would not make your paper better; if this is the case, explain why in your response letter)</ListItem>
            <ListItem>Provide a polite and scientific rebuttal to any points or comments you disagree with</ListItem>
            <ListItem>Differentiate between reviewer comments and your responses in your letter</ListItem>
            <ListItem>Clearly show the major revisions in the text, either with a different color text, by highlighting the changes, or with Microsoft Word's Track Changes feature</ListItem>
            <ListItem>Return the revised manuscript and response letter within the time period the editor tells you</ListItem>
          </List>
          <Typography paragraph>
            <strong>Reviewer comment:</strong> "In your analysis of the data you have chosen to use a somewhat obscure fitting function (regression). In my opinion, a simple Gaussian function would have sufficed. Moreover, the results would be more instructive and easier to compare to previous results."
          </Typography>
          <Typography paragraph>
            <strong>Response in agreement with the reviewer:</strong> "We agree with the reviewer's assessment of the analysis. Our tailored function does make it impossible to fully interpret the data in terms of the prevailing theories. In addition, in its current form, we agree it would be difficult to tell that this measurement constitutes a significant improvement over previously reported values. We have therefore re-analyzed the data using a Gaussian fitting function."
          </Typography>
          <Typography paragraph>
            <strong>Response disagreeing with the reviewer:</strong> "We agree with the reviewer that a simple Gaussian fit would facilitate comparison with the results of other studies. However, our tailored function allows for the analysis of the data in terms of the Smith model [Smith et al, 1998]. We have added two sentences to the paper (page 3, paragraph 2) to explain the use of this function and Smith's model."
          </Typography>
          <Typography paragraph>
            Note that in both comments (agreeing and disagreeing) the author is polite and shows respect for the reviewer's opinion. Also, in both circumstances, the author makes a change to the manuscript that addresses the reviewer's question.
            Remember, the reviewer is probably a highly knowledgeable person. If their suggestion is incorrect, it is likely because they misunderstood your manuscript, indicating that you should make your text clearer.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default HowToApply;
