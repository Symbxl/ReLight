import styled from 'styled-components'
import Button from '../common/Button';
import { HiOutlineMenu } from "react-icons/hi"
import { useTheme } from '../context/ThemeProvider';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { useState } from 'react';
import NightModeButton from '../common/NightModeButton';
import Phone from "../common/Phone"

const MenuNavigation = () => {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const LinkColor = styled(Link)`
  color: ${theme};
  text-decoration: none;
  font-size: 15px;
  padding: 1.2rem 0;
  margin: 0.5rem;
`

  const Item = styled.li`
  padding: 0.7rem;
`


  return (
    <Container>
      <LinkColor to="/"><Img src="https://i.imgur.com/KUEzFqL.png" /></LinkColor>
      <ContainerOne>
        <Item><NightModeButton /></Item>
        <Item><Phone /> </Item>
        <Button width="30px 20px" height="10px 20px">Contact</Button>
        <Menu onClick={handleClick} />
      </ContainerOne>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <ContainerTwo onClick={handleClose}>
          <LinkColor to="/">Home</LinkColor>
          <LinkColor to="/services">Services</LinkColor>
          <LinkColor to="/pricing">Pricing</LinkColor>
          <LinkColor to="/gallery">Gallery</LinkColor>
          <LinkColor to="/contact">Contact</LinkColor>
        </ContainerTwo>
      </Modal>
    </Container>
  );
}

export default MenuNavigation;

const media = "@media(min-width: 1100px)"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  ${media} {
    display: none;
  }
`
const ContainerOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Img = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 10px;
`


const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 500px;
`
const Menu = styled(HiOutlineMenu)`
  font-size: 25px;
  margin: 1rem;
`
