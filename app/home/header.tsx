import SectionThree from "./sectionThree";
import Navigation from "./navbar";
import { Container } from "@mui/material";

export default function Header() {
  return (
    <Container
      sx={{
        minHeight: "45vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1rem",
        padding: "1rem",
        '@media (max-width:600px)': {
          minHeight: "auto",
          padding: "1rem",
          justifyContent: "center",
        }
      }}
    >
      <Navigation />
      <SectionThree />
    </Container>
  );
}
