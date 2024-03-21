import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const FooterOne = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://facebook.com/Relight" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={30} />
        </a>
      </SocialIcons>
      <Copyright>&copy; 2024 ReLight Outdoor Lighting</Copyright>
    </FooterContainer>
  );
};

export default FooterOne;

const FooterContainer = styled.footer`
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    margin: 0 10px;
    transition: color 0.3s ease;

    &:hover {
      color: #ffd700; /* change color on hover */
    }
  }
`;

const Copyright = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;