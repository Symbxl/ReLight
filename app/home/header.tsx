import Section from "./section";
import { Container } from "@mui/material";
import { BtnContainer } from "../containers/button-container";
import Button from "../common/button";

export default function Header() {
  return (
    <Container
      sx={{
        padding: "1rem",
      }}
    >
      <Section
        subtitle="Live brighter with"
        secondSub="Relight Exterior Lighting"
        titleColor="#fff"
        subtitleColor="#fff"
        bgColor="transparent" // Set background color if needed
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        titleSize={{ xs: "1.rem", sm: "1.3rem", md: "1.5rem" }}
        subSize={{ xs: "3rem", sm: "4rem", md: "4.5rem" }}
      />
    </Container>
  );
}
