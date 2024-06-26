import styled from "styled-components"
import { useTheme } from "../context/ThemeProvider"

interface Props {
  title: string
  description: string
}

const SectionTwo = ({ title, description }: Props) => {
  const { theme } = useTheme()

  const Title = styled.h2`
  color: ${theme};
`
  return <Section>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Section>
}

export default SectionTwo;


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  width: 100vw;
`

const Description = styled.p`
  margin: 1rem 4rem;
`