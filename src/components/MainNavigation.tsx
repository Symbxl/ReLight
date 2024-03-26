import { Link as link } from "react-router-dom";
import { useNightMode } from "../context/NightModeProvider";
import { useTheme } from "../context/ThemeProvider";
import Button from "../common/Button";
import styled from "styled-components"
import { AiFillHome } from "react-icons/ai"
import Phone from "../common/Phone"
import Email from "../common/Email"

const MainNavigation = () => {
  const { nightMode } = useNightMode()
  const { theme } = useTheme()

  const Link = styled(link)`
  color: ${nightMode ? "white" : "black"};
  text-decoration: none;
  padding: 0.2rem;
`
  const media = "@media(max-width: 1100px)"

  const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  ${media} {
    display: none;
  }

`

  const LinkColor = styled(Link)`
      color: ${theme};
      font-size: 22px;
      font-weight: 400;
      font-family: "General Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  `

  return (
    <List>
      <Item><LinkColor to="/"> <Img src="https://i.imgur.com/KUEzFqL.png" /></LinkColor></Item>
      <Container>
        <Item><Link to="/"> <Home /> Home</Link></Item>
        <Item><Link to="/services">Services</Link></Item>
        <Item><Link to="/pricing">Pricing</Link></Item>
        <Item><Link to="/gallery">Gallery</Link></Item>
        <Item><Link to="/contact">Contact</Link></Item>
      </Container>
      <RightContainer>
        <Item><Phone /> </Item>
        <Item><Email /></Item>
        <Button padding="10px 23px">Contact</Button>
      </RightContainer>
    </List>
  )
}

export default MainNavigation;

const Home = styled(AiFillHome)`
  height: 13px;
  width: 13px;
`

const Img = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 10px;
`

const Item = styled.li`
  padding: 0.7rem;
`

const Container = styled.span`
  height: 10vh;
  display: flex;
  align-items: center;
`

const RightContainer = styled.span`
  height: 10vh;
  width: 275px;
  display: flex;
  align-items: center;
  justify-content: center;
`