import styled from "styled-components";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import { useTheme } from "../context/ThemeProvider"

const Section = () => {
  const { theme } = useTheme()

  const Title = styled.h2`
  margin: 2rem 0;
  color: ${theme};
`

  return <Article>
    <Title>SEE THE CHANGE: BEFORE & AFTER</Title>
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="https://www.gemstonelights.com/wp-content/uploads/2021/10/Final-104-copy-2-scaled-1.jpg" />}
      itemTwo={<ReactCompareSliderImage src="https://www.gemstonelights.com/wp-content/uploads/2021/10/Final-92-scaled-1.jpg" />}
    />

  </Article>
}

export default Section;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 100vw;
  margin-bottom: 2rem;
`