import React from 'react';
import styled from 'styled-components';

const SectionOne = () => {
  const videoId = 'cmslCU53Xnk';

  return (
    <VideoContainer>
      <Video
        title="YouTube video player"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Video>
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 65vh;
  overflow: hidden;
`;

const Video = styled.iframe`
  width: 100%;
  height: 100%;
`;

export default SectionOne;