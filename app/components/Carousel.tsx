import React, { useState } from 'react';
import { Card, CardMedia, IconButton, Box } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const Carousel = ({ images = ['#', '#', '#'] }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: 600, margin: 'auto', marginBottom: '1rem' }}>
      <Card sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          sx={{ height: 625 }}
        />
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
          }}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Card>
    </Box>
  );
};

export default Carousel;
