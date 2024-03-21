import GalleryCard from "../components/cards/GalleryCard";
import styled from "styled-components"

const GalleryPage = () => {
  return (<Container>
    {itemData.map(item => {
      return (
        <GalleryCard items={item} />
      )
    })}
  </Container>);
}

export default GalleryPage;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const itemData = [
  "https://i.imgur.io/dAHWvFV_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
  "https://i.imgur.io/qQ5wL5q_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
  "https://i.imgur.io/CzUh3qv_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
  "https://i.imgur.io/Gj5lr29_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
  "https://i.imgur.io/G1dmo8o_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
  "https://i.imgur.com/HWgEPiz.jpg",
  "https://i.imgur.com/ngZ3Nii.jpg",
  "https://i.imgur.com/1TTRyCj.jpg"
];