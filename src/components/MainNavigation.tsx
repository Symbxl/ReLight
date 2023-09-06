import { Link as link } from "react-router-dom";
import { useNightMode } from "../context/NightModeProvider";
import { useTheme } from "../context/ThemeProvider";
import NightModeButton from "../common/NightModeButton";
import Settings from "./theme/Settings";
import Button from "../common/Button";
import styled from "styled-components"
import { AiFillHome, AiFillContacts } from "react-icons/ai"
import { MdBuildCircle } from "react-icons/md"
import { RiPriceTag3Fill } from "react-icons/ri"

const MainNavigation = () => {
  const { nightMode } = useNightMode()
  const { theme } = useTheme()

  const Link = styled(link)`
  color: ${nightMode ? "white" : "black"};
  text-decoration: none;
`
  const media = "@media(max-width: 900px)"

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
  `

  return (
    <List>
      <Item><LinkColor to="/">Devicery</LinkColor></Item>
      <Container>
        <Item><Link to="/"> <AiFillHome /> Home</Link></Item>
        <Item><Link to="/services"> <MdBuildCircle /> Services</Link></Item>
        <Item><Link to="/pricing"><RiPriceTag3Fill />Pricing & Payment</Link></Item>
        <Item><Link to="/contact"><AiFillContacts /> Contact Us</Link></Item>
      </Container>
      <RightContainer>
        <Item><NightModeButton /></Item>
        <Item><Settings /></Item>
        <Button padding="10px 23px">Contact</Button>
      </RightContainer>
    </List>
  )
}

export default MainNavigation;


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