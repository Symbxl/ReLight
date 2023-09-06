import { useTheme } from "../context/ThemeProvider"
import styled from "styled-components"

const Header = () => {
  const { theme } = useTheme()

  const media = {
    desktop: "@media(min-width: 900px)",
    mobile: "@media(max-width: 900px)"
  }


  const Container = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem;
  ${media.mobile} {
      flex-direction: column;
      justify-content: center;
    };

`

  const Title = styled.h1`
    font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 600;
    font-size: 50px;
    line-height: 1.2;
    color: ${theme};
    font-size: 45px;
    `

  const Description = styled.h2`
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  line-height: 1.5;
  font-size: 18px;
  width: 500px;

  ${media.mobile} {
    width: 80vw;
    };
  `

  const Image = styled.img`
    height: 350px;
    width: 700px;
    border: 1px solid black;
    margin-top: 2rem;
  `

  const Span = styled.span`
    ${media.mobile} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 300px;
    };
    `
  return <>
    <Container>
      <Span>
        <Title>title... Lorem ipsum dolor sit consectetur ad</Title>
        <Description>description... Lorem ipsum dolor sit amet consectetur adipisicing elit. In, possimus voluptate cupiditate maiores deserunt facilis nemo qui! Ipsa sint quaerat quam molestiae minus error voluptas, corporis reprehenderit harum unde dicta!</Description>
      </Span>
      <Image src="#" />

    </Container>
  </>
}

export default Header;