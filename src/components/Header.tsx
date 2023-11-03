import { useTheme } from "../context/ThemeProvider"
import styled from "styled-components"

const Header = () => {
  const { theme } = useTheme()

  const media = {
    desktop: "@media(min-width: 1100px)",
    mobile: "@media(max-width: 1100px)"
  }

  const Container = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem;
  ${media.mobile} {
      flex-direction: column;
      justify-content: center;
    };

`

  const Title = styled.h1`
    font-family: "General Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"
    font-weight: 600;
    font-size: 50px;
    line-height: 1.2;
    width: 500px;
    color: ${theme};
    font-size: 45px;
    
  ${media.mobile} {
    width: 400px;
    margin-left: 3rem;
    };
    `

  const Description = styled.h2`
  font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-weight: 400;
  line-height: 1.5;
  font-size: 18px;
  width: 500px;
  color: #8c8c8d;
    ${media.mobile} {
    width: 400px;
    margin-left: 3rem;
    };
  `

  const Image = styled.img`
    height: 350px;
    width: 450px;
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
        <Title>Make this season better & brighter than ever!</Title>
        <Description>Say goodbye to the hassle of putting up and taking down Christmas lights every year. Our limitless options for lights and patterns allow you to celebrate any holiday or season.</Description>
      </Span>
      <Image src="" />

    </Container>
  </>
}

export default Header;