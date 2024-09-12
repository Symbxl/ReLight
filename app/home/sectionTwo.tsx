import { Container, Typography, Box } from "@mui/material";

const SectionTwo = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "25vh",
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
        Why choose Relight?
      </Typography>
      <Typography
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontWeight="600"
        fontSize="2.5rem"
        variant="h2"
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
