"use client";

import React, { useState } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: "What is your return policy?",
    answer: "Our return policy allows for returns within 30 days of purchase with a receipt."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to most countries."
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order using the tracking link provided in your confirmation email."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, American Express, and PayPal."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, American Express, and PayPal."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, American Express, and PayPal."
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: 'auto',
        padding: { xs: 2, md: 4 },
        borderRadius: '12px',
        backgroundColor: 'black',
        color: 'white',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
        textAlign: 'center', // Center text within the box
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4, color: 'white' }}>
        Frequently Asked Questions
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
        direction="row"
        sx={{
          '@media (min-width:600px)': {
            gridTemplateColumns: 'repeat(2, 1fr)', // Two columns for larger screens
          },
          '@media (max-width:600px)': {
            gridTemplateColumns: '1fr', // One column for smaller screens
          },
        }}
      >
        {faqData.map((faq, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                backgroundColor: 'black',
                color: 'white',
                marginBottom: 2,
                boxShadow: 'none',
                borderRadius: '8px',
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                sx={{
                  fontFamily: `"General Sans", sans-serif`,
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  color: 'white',
                  '& .MuiAccordionSummary-content': {
                    margin: 0,
                  },
                }}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  fontFamily: `"General Sans", sans-serif`,
                  fontSize: '1rem',
                  color: 'white',
                }}
              >
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FAQ;
