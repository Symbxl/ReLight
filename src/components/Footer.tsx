import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { useTheme } from '../context/ThemeProvider';

const FooterOne = () => {
  const { theme } = useTheme()

  const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${theme};
    margin: 0 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #ffd700; /* change color on hover */
    }
  }
`;

  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://facebook.com/homerelight" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://instagram.com/homerelight" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://x.com/homerelight.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://tiktok.com/homerelight.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={30} />
        </a>
      </SocialIcons>
      <Copyright>&copy; 2024 ReLight Outdoor Lighting</Copyright>
    </FooterContainer>
  );
};

export default FooterOne;

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
`;


const Copyright = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;