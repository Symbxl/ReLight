import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';

// Define the type for props
interface SectionProps {
  title?: string;
  subtitle?: string;
  colorSub?: string;
  secondSub?: string;
  thirdSub?: string;
  fourthSub?: String;
  fithSub?: string;
  sixthSub?: string;
  seventhSub?: string;
  titleColor?: string;
  subtitleColor?: string;
  bgColor?: string;
  fontFamily?: string;
  showButtons?: boolean;
  buttonText?: string[];
  buttonLinks?: string[];
  titleSize?: { xs?: string | number, sm?: string | number, md?: string | number };
  subSize?: { xs?: string | number, sm?: string | number, md?: string | number };
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  colorSub,
  secondSub,
  thirdSub,
  fourthSub,
  fithSub,
  sixthSub,
  seventhSub,
  titleColor = "hsl(210, 100%, 50%)",
  subtitleColor = "hsl(210, 100%, 50%)",
  titleSize = { xs: "1rem", sm: "1.2rem", md: "1.35rem" }, // Default values with more adaptability
  subSize = { xs: "1.5rem", sm: "1.9rem", md: "2rem" }, // Default values with more adaptability
  bgColor = "transparent",
  fontFamily = '"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  showButtons = false,
  buttonText = ["Get a Quote", "Contact Us"],
  buttonLinks = ["#quote", "#contact"],
}) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start", // Align items to the start (left)
        textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens
        paddingX: { xs: 2, sm: 4 },
        paddingY: { xs: 3, sm: 6 },
        margin: { xs: "1rem 0 0 0", sm: "1rem 0 0 0" },
        maxWidth: "100%",
        backgroundColor: bgColor,
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        paddingLeft: { xs: 2, sm: 4 },
      }}
    >
      <Typography
        fontFamily={fontFamily}
        fontWeight="700"
        fontSize={titleSize} // Responsive font size
        variant="h2"
        color={titleColor}
        sx={{ mb: { xs: 2, sm: 3 } }}
      >
        {title}
      </Typography>
      <Typography
        fontFamily={fontFamily}
        fontWeight="700"
        fontSize={subSize} // Responsive font size
        variant="h2"
        sx={{ mb: { xs: 3, sm: 4 } }}
      >
        {subtitle}
        <Box
          component="span"
          sx={{ color: subtitleColor, fontWeight: "700" }}
        >
          &nbsp;{colorSub}
        </Box>
        <br />
        {secondSub}

        <Box
          component="span"
          sx={{ color: subtitleColor, fontWeight: "700" }}
        >
          &nbsp;{thirdSub}
        </Box>
        <Box
          component="span"
          sx={{ fontWeight: "700" }}
        >
          &nbsp;{fourthSub}&nbsp;
        </Box>
        <br></br>
        <Box
          component="span"
          sx={{ color: subtitleColor, fontWeight: "700" }}        >
          {fithSub}&nbsp;
        </Box>

        <Box
          component="span"
          color="subtitleColor"
          sx={{ fontWeight: "700" }}
        >
          {sixthSub}&nbsp;
        </Box>
        <br></br>
        {seventhSub}&nbsp;
      </Typography>
      {showButtons && (
        <Grid container spacing={2} sx={{ mt: 2, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          {buttonText.map((text, index) => (
            <Grid item key={index}>
              <Button
                variant="outlined"
                size="large"
                href={buttonLinks[index]}
                sx={{
                  borderRadius: '8px',
                  padding: { xs: '8px 16px', sm: '10px 24px' },
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                  color: "#fff",
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                {text}
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Section;

