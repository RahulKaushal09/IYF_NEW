import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavbarGlobal from './components/navbar';
import React, { useState, useRef } from 'react';
import AutoRotateCarousel from './components/AutoRotateCarousel';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from "../src/routes/routes.js";
import Footer from "./components/Footer.js";

function App() {
  const [highlightStyle, setHighlightStyle] = useState({});

  const updateHighlight = (e) => {
    if (e) {
      const { offsetLeft, offsetWidth } = e.target;
      console.log({ offsetLeft, offsetWidth });
      const newStyle = {
        left: offsetLeft + 'px',
        width: offsetWidth + 'px',
      };
      setHighlightStyle(newStyle);
    }
    else {
      const newStyle = {
        left: 1225 + 'px',
        width: 67 + 'px',
      };
      setHighlightStyle(newStyle);
    }
    // Calculate the position and size of the highlight based on the clicked tab

  };
  const dashboardHighlight = (e) => {
    const newStyle = {
      left: 1292 + 'px',
      width: 47 + 'px',
    };
    console.log(newStyle);
    setHighlightStyle(newStyle);
  }

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route === '/home') {
        return (
          <Route
            path={route.route}
            element={<route.Component updateHighlight={updateHighlight} />}
            key={route.key}
          />
        );
      }

      // if (route.route === '/Dashboard') {
      //   // dashboardHighlight();
      //   console.log("enetered");
      //   return (
      //     <Route
      //       path={route.route}
      //       element={<route.Component />}
      //       key={route.key}
      //     />
      //   );
      // }
      // // For other routes that don't need the special props
      return (
        <Route path={route.route} element={<route.Component />} key={route.key} />
      );
    });
  return (
    <Router>
      <div className="App">
        <NavbarGlobal updateHighlight={updateHighlight} highlightStyle={highlightStyle} />
        {/* <AutoRotateCarousel /> */}

        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path='*' element={<Navigate to="/home" />} />
        </Routes>
        {/* <Footer /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
