import Button from "../common/Button";
import styled from "styled-components"

const Header = () => {
  return (
    <Head>
      <Container>
        <Title>Lighting Up Washington, all year long!</Title>
        <Description>
          Have everyones face light up when viewing your beautiful glowing home. Request a quote and light up your home today!</Description>
        <Button height="50px" width="200px" >
          Request a Quote
        </Button>
      </Container>
      <Image src="https://phandroid.com/wp-content/uploads/2022/10/govee-permanent-outdoor-lights-2.jpg" alt="Illuminated Home" />
    </Head>
  );
};

export default Header;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease; /* Add transition effect */
  &:hover {
    transform: scale(1.05); /* Scale up on hover */
  }
`;

const Head = styled.header`
  min-height: 50vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const mobileBreakpoint = "768px";

const responsiveStyles = `
  ${Title}, ${Description} {
    width: 100%;
    max-width: none;
  }
`;

const mediaQuery = `@media (max-width: ${mobileBreakpoint}) {
  ${responsiveStyles}
}`;   