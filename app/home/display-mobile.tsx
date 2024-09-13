import Section from "./section";
import Compatible from "./compatible";
import { Container } from "@mui/material";
import CardGrid from "../layouts/card-grid";
import { PhoneContainer } from "../containers/phone-container";


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
    <CardGrid
      one={<PhoneContainer image="https://framerusercontent.com/images/BzFcQ6E4kSLCxqDCW5lcozO5c.jpeg?scale-down-to=2048" light="A bright new future." dark="We've rebuilt everything from the ground up. New interactions. New visuals. New experience." />}
      two={<PhoneContainer height="325px" image="https://framerusercontent.com/images/F5OouxHM5wQ9YukLJCgs65g.jpeg" light="Discover new tricks & tips." dark=" Learn how to use your lights in various tutorials in the Discover tab." />
      }
      three={<PhoneContainer height="325px" image="https://framerusercontent.com/images/BzFcQ6E4kSLCxqDCW5lcozO5c.jpeg?scale-down-to=2048" />
      }
    />
    <Compatible />
  </Container >
}

export default DisplayMobile;