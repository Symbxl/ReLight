"use client"

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
        maxWidth: 'var(--max-width)',
        margin: 'auto',
        padding: 4,
        borderRadius: 'var(--border-radius)',
        backgroundColor: 'black',
        color: 'white',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Grid
        container
        spacing={2}
        direction="row"
        sx={{
          '@media (min-width:600px)': {
            gridTemplateColumns: '1fr 1fr', // Two columns layout
          },
          '@media (max-width:600px)': {
            gridTemplateColumns: '1fr', // Single column layout for mobile
          },
        }}
      >
        {faqData.map((faq, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ marginBottom: 2 }}>
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                borderRadius: 'var(--border-radius)',
                boxShadow: 'none',
                marginBottom: 1,
                '&:before': {
                  display: 'none',
                },
                backgroundColor: 'black',
                color: 'white',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} // Set the expand icon color to white
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
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
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  color: 'white',
                  backgroundColor: 'black',
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
