import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

import DashboardLayout from '../../layout/dashboardLayout/dashboardLayout';
import tabPage from '../tab/tab';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Grid item xs={12}>
      <Box>
        <tabPage />
      <Typography sx={{ color: '#000000' }}>
        Tab section
      </Typography>
      </Box>
      <h5>hello</h5>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>Component 1</Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>Component 2</Box>
      </Grid>
      {/* Add more components as needed */}
    </DashboardLayout>
  );
};

export default Dashboard;