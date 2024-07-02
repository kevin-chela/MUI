import React from 'react'

import Dashboard from './components/dashboard/dashboard'

import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';

const routing = [
    {
      type: "collapse",
      name: "Dashboard",
      key: "dashboard",
      route: "/",
      icon: <StoreOutlinedIcon size="12px" />,
      component: <Dashboard />,
      noCollapse: true,
    },
    // Add more routes as needed
  ];

export default routing