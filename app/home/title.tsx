import { Container, Typography } from "@mui/material";

const Title = ({ title, fontSize }: any) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        paddingX: 2,
        margin: 1,
      }}
    >
      <Typography
        fontWeight="700"
        fontSize={fontSize}
        variant="h2"
        sx={{ mb: 2, fontSize: { fontSize } }}
      >
        {title}
      </Typography>
    </Container >
  );
};

export default Title;
