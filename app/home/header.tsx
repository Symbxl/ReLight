import SectionThree from "./sectionThree";
import { Container } from "@mui/material";
import Navigation from "./navbar";

export default function Header() {
  return (
    <Container
      sx={{
        minHeight: "45vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "1rem"
      }}
    >
      <Navigation />
      <SectionThree />
    </Container>
  );
}
