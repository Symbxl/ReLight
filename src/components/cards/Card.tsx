import { keyframes, styled } from 'styled-components';

interface Props {
  items: string[];
}

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Image = styled.img`
  border-radius: 5px;
  height: 500px;
  width: 400px;
  margin: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  animation: ${slideIn} 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards; /* Smoother cubic-bezier easing */
`;

const Card = ({ items }: Props) => {
  return (
    <>
      {items?.map((item, index) => (
        <Image key={index} src={item} style={{ animationDelay: `${index * 0.2}s` }} />
      ))}
    </>
  );
};

export default Card