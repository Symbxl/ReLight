import Section from "./section";
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
      <Section
        subtitle="Live brighter with"
        secondSub="Relight permanent outdoor lighting."
        titleColor="#fff"
        subtitleColor="#fff"
        bgColor="transparent" // Set background color if needed
        fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        showButtons={true}
        buttonText={["Get a Quote", "Contact Us"]}
        buttonLinks={["#quote", "#contact"]}
        titleSize={{ xs: "1.rem", sm: "1.3rem", md: "1.5rem" }}
        subSize={{ xs: "3rem", sm: "3.5rem", md: "4rem" }}
      />
    </Container>
  );
}
