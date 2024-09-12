"use client"

import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Box, styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Image data
const images = [
  {
    main: 'https://i.imgur.com/5qwELHk.png',
    src: 'https://i.imgur.com/5qwELHk.png',
    alt: 'Holiday Lighting',
    type: 'small',
    title: 'Holiday Lighting',
    description: 'Permanent outdoor Christmas lights not only provide enduring festive charm but offer a convenient and time-saving lighting solution.',
  },
  {
    main: 'https://framerusercontent.com/images/syG1Lx8V7godxgeio5OukDhEkks.webp',
    src: 'https://framerusercontent.com/images/syG1Lx8V7godxgeio5OukDhEkks.webp',
    alt: 'Holiday Lighting',
    type: 'small',
    title: 'Holiday Lighting',
    description: 'Permanent outdoor Christmas lights not only provide enduring festive charm but offer a convenient and time-saving lighting solution.',
  },
  {
    main: 'https://i.imgur.com/5qwELHk.png',
    src: 'https://i.imgur.com/5qwELHk.png',
    alt: 'Security Lighting',
    type: 'small',
    title: 'Holiday Lighting',
    description: 'Permanent outdoor Christmas lights not only provide enduring festive charm but offer a convenient and time-saving lighting solution.',
  },
  {
    main: 'https://framerusercontent.com/images/syG1Lx8V7godxgeio5OukDhEkks.webp',
    src: 'https://framerusercontent.com/images/syG1Lx8V7godxgeio5OukDhEkks.webp',
    alt: 'Holiday Lighting',
    type: 'small',
    title: 'Holiday Lighting',
    description: 'Permanent outdoor Christmas lights not only provide enduring festive charm but offer a convenient and time-saving lighting solution.',
  },
];

// Styled components
const ThumbnailCard = styled(Card)(({ theme, selected }) => ({
  position: 'relative',
  top: 0,
  transition: 'all 0.3s ease',
  boxShadow: 'none',
  margin: theme.spacing(0, 0.5),
  filter: 'blur(50%)',
  overflow: 'hidden', // Ensures content doesn't overflow
  // Thumbnail size adjustments
  [theme.breakpoints.up('md')]: {
    width: '100%',
    height: 250,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 200,
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 200,
  },
}));

const ThumbnailText = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  padding: theme.spacing(0.5),
  borderRadius: '4px',
  textTransform: 'uppercase',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  zIndex: 1,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
}));

const MainImage = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: '65vh',
  width: '100%',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
  borderRadius: '16px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  borderRadius: '50%',
  padding: theme.spacing(1),
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
  zIndex: 3,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
}));

const ThumbnailsWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  padding: theme.spacing(1),
  boxSizing: 'border-box',
}));

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Box sx={{ width: '100vw', padding: 2, boxSizing: 'border-box', backgroundColor: 'transparent' }}>
      {/* Main Image with Title and Description */}
      <MainImage>
        <CardMedia
          component="img"
          image={images[currentImageIndex].main}
          alt={images[currentImageIndex].alt}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover', // Ensures the image keeps its aspect ratio
            filter: 'brightness(100%)',
          }}
        />
        <CardContent
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            textAlign: 'left',
            color: 'white',
            padding: 2,
            borderRadius: 1,
            width: 'calc(100% - 32px)',
            zIndex: 2,
          }}
        >
          <Typography
            variant="h4"
            component="div"
            fontWeight="bold"
            fontSize="3.5rem"
            gutterBottom>
            {images[currentImageIndex].title}
          </Typography>
          <Typography variant="body1" component="div" fontSize="1.25rem">
            {images[currentImageIndex].description}
          </Typography>
        </CardContent>
        {/* Navigation Controls */}
        <NavigationButton
          sx={{ left: 16 }}
          onClick={handlePrev}
        >
          <ArrowBackIosIcon />
        </NavigationButton>
        <NavigationButton
          sx={{ right: 16 }}
          onClick={handleNext}
        >
          <ArrowForwardIosIcon />
        </NavigationButton>

        <ThumbnailsWrapper>
          {images.map((image, index) => (
            <ThumbnailCard
              key={image.src}
              selected={currentImageIndex === index}
              onClick={() => setCurrentImageIndex(index)}
            >
              <CardMedia
                component="img"
                image={image.src}
                alt={image.alt}
                sx={{
                  height: '100%',
                  width: '100%',
                  filter: 'blur(20%)',
                }}
              />
              <ThumbnailText>
                <Typography
                  color="white"
                  variant="h6"
                  component="div"
                  fontWeight="bold"
                  fontSize="1.2rem"
                >
                  {image.title}
                </Typography>
              </ThumbnailText>
            </ThumbnailCard>
          ))}
        </ThumbnailsWrapper>
      </MainImage>
    </Box>
  );
};

export default Gallery;
