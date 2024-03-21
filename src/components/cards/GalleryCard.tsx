import { styled } from 'styled-components';

const Image = styled.img`
  border-radius: 5px;
  height: 400px;
  width: 400px;
  margin: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const GalleryCard = ({ items }: any) => {
  return (
    <Image src={items} />
  );
};

export default GalleryCard