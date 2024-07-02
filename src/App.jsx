import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import routes from "./routing";
import './App.css'

const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    if (route.collapse) {
      return getRoutes(route.collapse);
    }

    if (route.route) {
      return <Route exact path={route.route} element={route.component} key={route.key} />;
    }

    return null;
  });

  const App = () => {
    return (
      <Router>
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    );
  };

export default App
