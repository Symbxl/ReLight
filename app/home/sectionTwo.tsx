import { Container, Typography, Box } from "@mui/material";

const SectionTwo = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // Center horizontally
        textAlign: "center", // Center text
        paddingX: { xs: 2, sm: 4 }, // Responsive horizontal padding
        margin: { xs: "1rem 0", sm: "2rem 0" }, // Responsive margin
        maxWidth: "100%", // Ensure it takes full width
      }}
    >
      <Typography
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontWeight="500"
        fontSize={{ xs: "1rem", sm: "1.1rem" }} // Responsive font size
        variant="h2"
        color="hsl(210, 100%, 60%)"
        sx={{ mb: { xs: 1, sm: 2 } }} // Responsive margin-bottom
      >
        Why choose Relight?
      </Typography>
      <Typography
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontWeight="600"
        fontSize={{ xs: "1.8rem", sm: "2.5rem" }} // Responsive font size
        variant="h2"
        sx={{ mb: { xs: 3, sm: 2 } }} // Responsive margin-bottom
      >
        A
        <Box
          component="span"
          sx={{ color: "hsl(210, 100%, 60%)" }}
        >
          &nbsp;delightful experience&nbsp;
        </Box>
        <br />
        for you and your community
      </Typography>
    </Container>
  );
};

export default SectionTwo;
