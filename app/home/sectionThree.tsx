import { Container, Typography, Box, Button, Grid } from "@mui/material";

const SectionThree = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        textAlign: "left",
        paddingX: { xs: 2, sm: 4 }, // Responsive padding
        paddingY: { xs: 2, sm: 3 },
        borderRadius: '8px',
      }}
    >
      <Typography
        fontFamily='theme.main'
        fontWeight="600"
        fontSize={{ xs: '1.5rem', sm: '1.2rem' }} // Responsive font size
        variant="h3"
        color="#fff"
        sx={{ mb: { xs: 1, sm: 2 } }} // Responsive margin-bottom
      >
        RELIGHT OUTDOOR LIGHTING
      </Typography>
      <Typography
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        fontWeight="700"
        fontSize={{ xs: '2.5rem', sm: '4rem' }} // Responsive font size
        variant="h1"
        lineHeight="1.2"
        sx={{ mb: { xs: 2, sm: 3 } }} // Responsive margin-bottom
      >
        Live
        <Box
          component="span"
          sx={{ color: "primary.main", fontWeight: 'bold' }}
        >
          &nbsp;brighter&nbsp;
        </Box>
        with
        <br />
        permanent outdoor lighting.
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: '8px',
              padding: { xs: '8px 16px', sm: '10px 24px' }, // Responsive padding
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
              background: `linear-gradient(95deg, rgba(20%, 60%, 100%, 0.5) 50%, rgba(20%, 60%, 100%, 0.9) 90%)`,
              color: "#fff",
              '&:hover': {
                backgroundColor: 'primary.dark',
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            Get a Quote
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              borderRadius: '8px',
              padding: { xs: '8px 16px', sm: '10px 24px' }, // Responsive padding
              borderColor: '#fff',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
                borderColor: 'primary.main',
              },
            }}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionThree;
