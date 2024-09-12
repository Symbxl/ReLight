import { Container, Typography } from "@mui/material";

const Section = ({ title, sz }: any) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "5vh",
        textAlign: "left",
        paddingX: 2,
        margin: 1,
      }}
    >
      <Typography
        fontWeight="700"
        fontSize="1.3rem"
        variant="h2"
        sx={{ mb: 2, fontSize: sz }}
      >
        {title}
      </Typography>
    </Container>
  );
};

export default Section;
