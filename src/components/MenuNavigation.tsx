import styled from 'styled-components';
import { HiOutlineMenu } from 'react-icons/hi';
import { useTheme } from '../context/ThemeProvider';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { useState } from 'react';
import Phone from '../common/Phone';
import Email from "../common/Email";

const MenuNavigation = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const LinkColor = styled(Link)`
    color: ${theme};
    text-decoration: none;
    font-size: 15px;
    padding: 1.2rem 0;
    margin: 0.5rem;
    font-weight: 520;
  `;

  const Item = styled.div`
    text-decoration: none;
    margin-right: 10px;
  `;

  return (
    <Container>
      <LinkColor to="/">
        <Img src="https://i.imgur.com/KUEzFqL.png" />
      </LinkColor>
      <ContainerOne>
        <Item><Phone /></Item>
        <Item><Email /></Item>
        <MenuButton onClick={handleClick} />
      </ContainerOne>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <ContainerTwo onClick={handleClose}>
          <LinkColor to="/">Home</LinkColor>
          <LinkColor to="/services">Services & Pricing</LinkColor>
          <LinkColor to="/gallery">Gallery</LinkColor>
          <LinkColor to="/contact">Contact</LinkColor>
        </ContainerTwo>
      </Modal>
    </Container>
  );
};

export default MenuNavigation;

const media = "@media(min-width: 1100px)";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${media} {
    display: none;
  }
`;

const ContainerOne = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 10px;
`;

const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const MenuButton = styled(HiOutlineMenu)`
  font-size: 25px;
  margin: 1rem;
  transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    transform: translateX(-5px);
  }
`;
