import React from 'react';
import styled from 'styled-components';

interface PricingProps {
  foodPrice: number;
}

const PricingCardContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Price = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Currency = styled.span`
  font-size: 18px;
`;

const Amount = styled.span`
  font-weight: bold;
`;

const Period = styled.span`
  font-size: 18px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const PricingCard: React.FC<PricingProps> = ({ foodPrice }) => {
  return (
    <PricingCardContainer>
      <Title>Food Pricing</Title>
      <Price>
        <Currency>$</Currency>
        <Amount>{foodPrice}</Amount>
        <Period>per food</Period>
      </Price>
      <p>Choose the best plan that fits your needs.</p>
      <Button>Get Started</Button>
    </PricingCardContainer>
  );
};

export default PricingCard;
