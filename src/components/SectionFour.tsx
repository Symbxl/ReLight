import styled from "styled-components";
import { useTheme } from '../context/ThemeProvider';
import AnimationCard from "./cards/AnimationsCard";
import Button from "../common/Button";

const SectionFive = () => {
  const { theme } = useTheme()

  const Title = styled.h2`
  color: ${theme};
  align-self: center;
`
  const data = [
    "https://i.imgur.io/dAHWvFV_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
    "https://i.imgur.io/qQ5wL5q_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
    "https://i.imgur.io/CzUh3qv_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
    "https://i.imgur.io/Gj5lr29_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
    "https://i.imgur.io/G1dmo8o_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
    "https://i.imgur.com/HWgEPiz.jpg",
    "https://i.imgur.com/ngZ3Nii.jpg",
    "https://i.imgur.com/1TTRyCj.jpg"
  ];

  return (<Section>
    <Title>ANIMATIONS & EFFECTS
      <Button height="25px" margin="0 0 0 1rem" >View More</Button>
    </Title>
    <Container>
      <AnimationCard data={data} />
    </Container>
  </Section>);
}

export default SectionFive;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100vw;
  margin-bottom: 4rem;
`

const Container = styled.div`

`