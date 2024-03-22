import { useTheme } from "../../context/ThemeProvider";
import styled from "styled-components"
interface Service {
  number: JSX.Element | number;
  title: string;
  desc: string;
}

interface Props {
  services: Service[];
}

const ServicesCard = ({ services }: Props) => {
  const { theme } = useTheme()

  const NumberCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${theme};
  color: #333333;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
  return (

    <CardContainer>
      {services.map((service, index) => (
        <ServiceItem key={index}>
          <NumberCircle>{service.number}</NumberCircle>
          <Title>{service.title}</Title>
          <Description>{service.desc}</Description>
        </ServiceItem>
      ))}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const ServiceItem = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 600px;
  height: 100%;
  background-color: #ffffff;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  color: #8c8c8c;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  color: #434343;
  margin-top: 3px;
`;

export default ServicesCard;