import { styled } from "styled-components";
import { useTheme } from '../context/ThemeProvider';

const SectionThree = () => {
  const { theme } = useTheme()

  const Title = styled.h2`
  color: ${theme};
`

  return (<Section>
    <Title>Can you're lights do this?</Title>
  </Section>);
}

export default SectionThree;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  margin-bottom: 4rem;

`
