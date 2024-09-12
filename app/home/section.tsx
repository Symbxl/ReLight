import { Container, Typography, Box } from "@mui/material";

const Section = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "5vh",
        textAlign: "left",
        paddingX: 2,
      }}
    >
      <Typography
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontWeight="500"
        fontSize="1.1rem"
        variant="h2"
        color="hsl(210, 100%, 60%)"
        sx={{ mb: 2 }} // Margin-bottom for spacing
      >
        Shop by use case
      </Typography>
    </Container>
  );
};

export default Section;
