import styled from 'styled-components'
import Button from '../common/Button';
import { HiOutlineMenu } from "react-icons/hi"
import { useTheme } from '../context/ThemeProvider';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { useState } from 'react';
import Settings from './theme/Settings';
import DarkButton from '../common/DarkButton';
import LightButton from '../common/LightButton';

const MenuNavigation = () => {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const LinkColor = styled(Link)`
  color: ${theme};
  text-decoration: none;
  margin: 1rem;
  font-size: 22px;
`
  return (
    <Container>
      <LinkColor to="/">Devicery</LinkColor>
      <Span>
        <Button padding="10px 20px">contact</Button>
        <Menu onClick={handleClick} />
      </Span>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <Container>
          <Settings />
          <LightButton />
          <DarkButton />
        </Container>
      </Modal>

    </Container>
  );
}

export default MenuNavigation;

const media = "@media(min-width: 900px)"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media} {
    display: none;
  }
`

const Span = styled.span`
  display: flex;
  align-items: center;
`

const Menu = styled(HiOutlineMenu)`
  font-size: 25px;
  margin: 1rem;
`
