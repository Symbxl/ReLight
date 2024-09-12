import { Container, Typography, Box } from "@mui/material";

const SectionTwo = () => {
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
        margin: { xs: "1rem 0", sm: "2rem 0" },
        maxWidth: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.05)", // Light background color
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        paddingLeft: { xs: 2, sm: 4 },
      }}
    >
      <Typography
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontWeight="500"
        fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }} // Responsive font size
        variant="h2"
        color="hsl(210, 100%, 50%)"
        sx={{ mb: { xs: 2, sm: 3 } }}
      >
        Why choose Relight?
      </Typography>
      <Typography
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontWeight="700"
        fontSize={{ xs: "1.6rem", sm: "2rem", md: "2.5rem" }} // Responsive font size
        variant="h2"
        sx={{ mb: { xs: 3, sm: 4 } }}
      >
        A
        <Box
          component="span"
          sx={{ color: "hsl(210, 100%, 50%)", fontWeight: "700" }}
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
