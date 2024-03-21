import { styled } from "styled-components";
import { useTheme } from '../context/ThemeProvider';

const SectionThree = () => {
  const { theme } = useTheme()

  const Title = styled.h2`
  color: ${theme};
`

  return (<Section>
    <Title>Can you're lights do this?</Title>
    <Container>
      <Image src="#" />
      <Image src="#" />
      <Image src="#" />

    </Container>
  </Section>);
}

export default SectionThree;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  margin-bottom: 4rem;
  width: 100vw;
`

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`


const Image = styled.img`
  width: 250px;
  height: 250px;
  margin: 1rem;
`
