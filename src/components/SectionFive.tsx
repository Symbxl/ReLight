import styled from "styled-components";
import { useNightMode } from '../context/NightModeProvider';

interface Props {
  title: string;
  description: string;
  image: string;
  left: boolean;
  right: boolean;
}

const SectionFour = ({ title, description, image, left, right }: Props) => {
  const { nightMode } = useNightMode();

  return (
    <Section>
      {left && <ImageWrapper><Image src={image} alt={title} /></ImageWrapper>}
      <ContentContainer>
        <Title>{title}</Title>
        <Description nightMode={nightMode}>{description}</Description>
      </ContentContainer>
      {right && <ImageWrapper><Image src={image} alt={title} /></ImageWrapper>}
    </Section>
  );
};

export default SectionFour;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p<{ nightMode: boolean }>`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
  color: ${({ nightMode }) => (nightMode ? "#ffffff" : "#000000")}; /* Change text color based on nightMode */
`;

const ImageWrapper = styled.div`
  max-width: 350px;
  width: 100%;
  margin: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
