import React from 'react';

import { Box, Grid } from '@mui/material';

import DashboardLayout from '../../layout/dashboardLayout/dashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Grid item xs={12}>
      <Box>Component 0</Box>
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