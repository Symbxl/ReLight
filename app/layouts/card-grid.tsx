"use client"; // For Next.js client-side rendering

import React from 'react';
import { Box } from '@mui/material';

interface Props {
  one: React.ReactNode; // Main large card
  two: React.ReactNode; // First small card
  three: React.ReactNode; // Second small card
}

const CardGrid: React.FC<Props> = ({ one, two, three }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          md: '1fr', // Single column on extra small screens
          lg: '2fr 1fr', // Two columns on medium and larger screens
        },
        gridTemplateRows: {
          md: 'repeat(3, auto)', // Stack cards vertically on extra small screens
          lg: '1fr 1fr', // Two rows on medium and larger screens
        },
        gap: '16px',
        width: '100%',
        height: '100%',
        p: 2,
        boxSizing: 'border-box',
      }}
    >
      {/* Main Large Card (Left side) */}
      <Box
        sx={{
          gridColumn: {
            md: '1 / span 1', // Full width on extra small screens
            lg: '1 / span 1', // Full width on medium and larger screens
          },
          gridRow: {
            md: '1 / span 1', // Takes one row on extra small screens
            lg: '1 / span 2', // Spans both rows on medium and larger screens
          },
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
          p: 2, // Add padding to the card
        }}
      >
        {one}
      </Box>

      {/* Small Cards (Right side) */}
      <Box
        sx={{
          gridColumn: {
            md: '1 / span 1', // Full width on extra small screens
            lg: '2 / span 1', // Right side on medium and larger screens
          },
          gridRow: {
            md: '2 / span 2', // Takes remaining rows on extra small screens
            lg: '1 / span 2', // Spans both rows on medium and larger screens
          },
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          height: '100%', // Ensure the container takes full height
        }}
      >
        <Box
          sx={{
            flex: 1,
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            p: 2, // Add padding to the card
          }}
        >
          {two}
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          {three}
        </Box>
      </Box>
    </Box>
  );
};

export default CardGrid;
