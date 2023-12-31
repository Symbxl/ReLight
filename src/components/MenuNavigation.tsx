import styled from 'styled-components'
import Button from '../common/Button';
import { HiOutlineMenu } from "react-icons/hi"
import { useTheme } from '../context/ThemeProvider';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { useState } from 'react';
import Settings from './theme/Settings';

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
  return (
    <Container>
      <LinkColor to="/">ReLight</LinkColor>
      <Span>
        <Button padding="10px 20px">Contact</Button>
        <Menu onClick={handleClick} />
      </Span>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <ContainerTwo>
          <Settings />
          <LinkColor to="/home">Home</LinkColor>
          <LinkColor to="/services">Services</LinkColor>
          <LinkColor to="/animations">Animations</LinkColor>
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


const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Span = styled.span`
  display: flex;
  align-items: center;
`

const Menu = styled(HiOutlineMenu)`
  font-size: 25px;
  margin: 1rem;
`
