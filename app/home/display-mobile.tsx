"use client"

import Section from "./section";
import Compatible from "./compatible";
import { Container } from "@mui/material";
import CardGrid from "../layouts/card-grid";
import { PhoneContainer } from "../containers/phone-container";
import PhoneCard from "../components/PhoneCard";

export const DisplayMobile = () => {
  return <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}>

    <Section
      title="Download app &#8594;"
      subtitle="Enjoy precise"
      colorSub="accent lighting,"
      secondSub=" stunning"
      thirdSub="firework patterns"
      fourthSub="and"
      fithSub="schedule in"
      sixthSub=""
      seventhSub="advanced with our new interface"
      titleColor="hsl(210, 100%, 50%)"
      subtitleColor="hsl(210, 100%, 50%)"
      bgColor="rgba(0, 0, 0, 0.05)"
      fontFamily='"General Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    />
    <PhoneContainer url="https://framerusercontent.com/assets/Y5JWtBxLLnL6s4zRbzM7VCniWMs.mp4" />
    <PhoneContainer img="true" height="300px" url="https://framerusercontent.com/images/X8VEE7Yik9551XzG9IrdbAZlW6s.png" />
    <PhoneContainer height="400px" url="https://framerusercontent.com/assets/CnWUhUcmtTb0Rbm4kiNDNpmqQM.mp4" />
    <PhoneContainer height="400px" url="https://framerusercontent.com/assets/oSPfjWZjyWhxagYjX0K4KWkvZY.mp4" />
    <PhoneContainer url="https://framerusercontent.com/assets/KmelkH2boHOSWVkOcfFQRJ3Lpfo.mp4" />
    <Compatible />
  </Container >
}

export default DisplayMobile;