import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeroSection from '../../pages/heroSection';

const DashboardContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(8),
  },
}));

const DashboardLayout = ({ children }) => {
  return (
    <DashboardContainer>
      <HeroSection />
      <ContentContainer>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </ContentContainer>
    </DashboardContainer>
  );
};

export default DashboardLayout;
