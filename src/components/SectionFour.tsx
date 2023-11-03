import styled from "styled-components";
import { useTheme } from '../context/ThemeProvider';

const SectionFour = () => {
  const { theme } = useTheme()

  const Title = styled.h2`
  color: ${theme};
`

  return (<Section>
    <Title>ANIMATIONS, EFFECTS & MORE</Title>
  </Section>);
}

export default SectionFour;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
`
