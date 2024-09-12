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
        paddingX: 4,
        paddingY: 3,
        borderRadius: '8px',
      }}
    >
      <Typography
        fontFamily='theme.main'
        fontWeight="600"
        fontSize="1.2rem"
        variant="h3"
        color="#fff"
        sx={{ mb: 2 }}
      >
        RELIGHT OUTDOOR LIGHTING
      </Typography>
      <Typography
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        fontWeight="700"
        fontSize="4rem"
        variant="h1"
        lineHeight="1.2"
        sx={{ mb: 3 }}
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
            variant="contained"
            size="large"
            sx={{
              borderRadius: '8px',
              padding: '10px 24px',
              backgroundColor: 'primary.main',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
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
              padding: '10px 24px',
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
