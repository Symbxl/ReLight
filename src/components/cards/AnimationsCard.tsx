import styled, { keyframes } from "styled-components";
import React from "react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface Props {
  data: string[];
}

const AnimationCard: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data.map((item, index) => (
        <AnimatedImage key={index} src={item} />
      ))}
    </Container>
  );
};

export default AnimationCard;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const AnimatedImage = styled.img`
  width: 250px;
  height: 250px;
  margin: 1rem;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
