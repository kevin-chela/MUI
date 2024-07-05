import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from '../components/navbar/navbar';

import backgroundImage  from '../assets/images/background.jpg'

const HeroContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  width: '100%',
  backgroundImage: `url(${backgroundImage})`, // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  color: '#fff',
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)', // Add an overlay for better text visibility
  zIndex: 1,
}));

const HeroContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  textAlign: 'center',
  zIndex: 2,
  position: 'relative',
}));

const HeroSection = () => {
  return (
    <HeroContainer>
      <Navbar />
      <Overlay />
      <HeroContent>
        <Typography variant="h2" component="h1" gutterBottom>
          Innovate Your Future
        </Typography>
        <Typography variant="h5" gutterBottom>
          Our cutting-edge technology solutions empower your business to reach new heights.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{
            marginTop: '20px',
        }}>
          Discover How
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
