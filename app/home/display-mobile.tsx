"use client"

import Section from "./section";
import Title from "./title";
import Compatible from "./compatible";
import { Container } from "@mui/material";
import Carousel from "../components/Carousel";

const DisplayMobile = () => {


  return <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      minHeight: "100vh",
      border: "1px solid white",
      borderRadius: "5px",
    }}>

    <Section
      title="Download mobile app &#8594;"
      subtitle="Enjoy precise"
      colorSub="accent lighting,"
      secondSub="stunning"
      thirdSub="firework patterns"
      fourthSub="and"
      fithSub="schedule"
      sixthSub="weeks in advanced with"
      seventhSub="our new interface"
      titleColor="hsl(210, 100%, 50%)"
      subtitleColor="hsl(210, 100%, 50%)"
      bgColor="rgba(0, 0, 0, 0.05)"
      fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    />
    <Carousel />
    <Title title="Works with" fontSize="1.5rem" />
    <Compatible />
  </Container>

}

export default DisplayMobile;