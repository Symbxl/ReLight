"use client"; // For Next.js client-side rendering

import React from 'react';
import { Box } from '@mui/material';

const PhoneCard: React.FC = ({ image, height = '844px' }: any) => {
  return (
    <Box
      sx={{
        width: '390px', // iPhone 15 width
        height: `${height}`, // iPhone 15 height
        borderRadius: '50px', // Adjusted for iPhone 15 shape
        backgroundColor: '#000', // Outer frame color
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '45px', // Inner screen border radius
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src={image}
          alt="iPhone Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box
        sx={{
          width: '60px', // Width of the camera area
          height: '6px', // Height of the camera area
          borderRadius: '3px',
          backgroundColor: '#333',
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </Box>
  );
};

export default PhoneCard;
