"use client"

import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const images = [
  {
    src: 'https://framerusercontent.com/images/yTbtNSLNCIwyFzapzkf0IZD3irY.webp',
    alt: 'Accent Lighting',
    type: 'large',
    title: 'Accent Lighting',
    description: 'JellyFish Lighting makes it easy to highlight specific features on your home like peaks or columns, or simply eliminate nighttime darkness.',
  },
  {
    src: 'https://framerusercontent.com/images/r38D90vmQzBbebYLYXeHK3eHNpU.png',
    alt: 'Holiday Lighting',
    type: 'small',
    title: 'Holiday Lighting',
    description: 'Permanent outdoor Christmas lights not only provide enduring festive charm but offer a convenient and time-saving lighting solution.',
  },
  {
    src: 'https://framerusercontent.com/images/Kjvp0sa91BUuyOadCYYSEnjFh0.png',
    alt: 'Security Lighting',
    type: 'small',
    title: 'Security Lighting',
    description: 'Light cannot keep a burglar from breaking into your home, but it can make it easier to spot suspicious activity or deter intruders in the first place.',
  },
  {
    src: 'https://framerusercontent.com/images/syG1Lx8V7godxgeio5OukDhEkks.webp',
    alt: 'Gameday Lighting',
    type: 'small',
    title: 'Gameday Lighting',
    description: "Match your lights to your favorite team's colors to show your team spirit. Make a custom schedule to sync your lights up to gameday.",
  },
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: '100vw',
        height: '80vh',
        padding: 2,
        boxSizing: 'border-box',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
    >
      <Grid item xs={12} md={8} sx={{ height: '100%', position: 'relative' }}>
        <Card
          sx={{
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
            borderRadius: '16px',
            overflow: 'hidden',
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <CardMedia
            component="img"
            image={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              filter: 'brightness(70%)',
            }}
          />
          <CardContent
            sx={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              textAlign: 'left',
              color: 'white',
              padding: 2,
              borderRadius: 1,
              width: 'calc(100% - 32px)',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 2,
            }}
          >
            <Typography variant="h4" component="div" fontWeight="bold" gutterBottom>
              {images[currentImageIndex].title}
            </Typography>
            <Typography variant="body1" component="div">
              {images[currentImageIndex].description}
            </Typography>
          </CardContent>
          {/* Navigation Controls */}
          <IconButton
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              borderRadius: '50%',
              padding: 1,
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              zIndex: 3,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
            onClick={handlePrev}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              borderRadius: '50%',
              padding: 1,
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              zIndex: 3,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
            onClick={handleNext}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Card>
      </Grid>
      {/* Right Column with 5 Images including the Accent Lighting at Bottom */}
      <Grid item xs={12} md={4} sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Grid container spacing={2} direction="column" sx={{ height: '100%' }}>
          {images.slice(1).map((image, index) => (
            <Grid item key={index} sx={{ height: '20%' }}>
              <Card
                sx={{
                  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
                    transform: 'scale(1.05)',
                  },
                }}
                onClick={() => setCurrentImageIndex(index + 1)} // index + 1 to account for the large image being the first one
              >
                <CardMedia
                  component="img"
                  image={image.src}
                  alt={image.alt}
                  sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(85%)',
                  }}
                />
                <CardContent
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 2,
                    borderRadius: '4px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
                    textTransform: 'uppercase',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 'bold',
                  }}
                >
                  <Typography variant="h6" component="div">
                    {image.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Gallery;
