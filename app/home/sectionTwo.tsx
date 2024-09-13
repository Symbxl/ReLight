import React from 'react';
import { Container, Typography, Box } from '@mui/material';

// Define the type for props
interface SectionTwoProps {
  title?: string;
  titleTwo?: String;
  colorTitle?: String;
  subtitle?: string;
  titleColor?: string;
  subtitleColor?: string;
  bgColor?: string;
  fontFamily?: string;
}

const SectionTwo: React.FC<SectionTwoProps> = ({
  title,
  titleTwo,
  colorTitle,
  subtitle,
  titleColor = "hsl(210, 100%, 50%)",
  subtitleColor = "hsl(210, 100%, 50%)",
  bgColor,
  fontFamily = '"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
}) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start", // Align items to the start (left)
        textAlign: "left", // Align text to the left
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
        fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }} // Responsive font size
        variant="h2"
        color={titleColor}
        sx={{ mb: { xs: 2, sm: 3 } }}
      >
        {title}
      </Typography>
      <Typography
        fontFamily={fontFamily}
        fontWeight="700"
        fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.5rem" }} // Responsive font size
        variant="h2"
        sx={{ mb: { xs: 3, sm: 4 } }}
      >
        {titleTwo}
        <Box
          component="span"
          sx={{ color: subtitleColor, fontWeight: "700" }}
        >
          &nbsp;{colorTitle}&nbsp;
        </Box>
        <br />
        {subtitle}
      </Typography>
    </Container>
  );
};

export default SectionTwo;
