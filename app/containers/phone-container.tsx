import PhoneCard from "../components/PhoneCard";
import { Container, Typography, Box } from "@mui/material";
import '@fontsource/roboto'; // Import Roboto font
import { CenterFocusStrong } from "@mui/icons-material";

interface PhoneContainerProps {
  image: string;
}

export const PhoneContainer: React.FC<PhoneContainerProps> = ({ image, height }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        backgroundColor: 'rgba(var(--callout-rgb), 0.8)',
        border: '1px solid rgba(var(--callout-border-rgb), 0.4)',
        borderRadius: 'var(--border-radius)',
        margin: 2,
        maxWidth: 'var(--max-width)',
        boxShadow: '0 4px 8px rgba(var(--foreground-rgb), 0.2)',
        textAlign: 'center',
        alignItems: 'center',

      }}
    >
      {/* Combined title and description */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Roboto, Arial, sans-serif', // Use Roboto font
          fontWeight: 'bold', // Title weight
          fontSize: '1.3rem',
          color: 'rgba(var(--foreground-rgb), 1)', // Title color
          lineHeight: 1.4,
          marginBottom: '1rem', // Space below the text
          display: 'block', // Ensure the block behavior
        }}
      >
        A Bright New Future.&nbsp;
        <Box
          component="span"
          sx={{
            fontWeight: 'normal',
            color: 'rgba(var(--foreground-rgb), 0.7)', // Description color
            fontSize: '1.2rem',
            lineHeight: 1.4,
            marginTop: '0.5rem', // Space between title and description
          }}
        >
          We've rebuilt everything from the ground up. New interactions. New visuals. New experience.
        </Box>
      </Typography>

      {/* PhoneCard Component */}
      <PhoneCard height={height} image={image} />
    </Container>
  );
};