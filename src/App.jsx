import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { darkTheme } from './Theme/DarkThem'; // Make sure the path is correct for your theme
import Navbar from './Component/Navbar/Navbar'; // Correct path for your Navbar component
import Homepage from "./Component/Home/Homepage"; // Make sure to import Homepage correctly
import Pakages from './Component/Home/Pakage'; // Import Packages component
import KolukumalaiPage from "./Component/Home/Kolukumalai"; // Kolukumalai page
import MeeshapulimalaPage from "./Component/Home/Meshapulimala"; // Meeshapulimala page
import Destination from "./Component/Home/Destination"; // Destination page
import Footer from "./Component/Footer/Footers";
import TentandTrek from './Component/Home/TentandTrek';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router basename="/va-Oru-Trippadikkam">
        {/* Include the Navbar at the top */}
        <Navbar />
        
        {/* Define your routing here */}
        <Routes>
          {/* Define the main homepage route */}
          <Route path="/" element={<Homepage />} />

          {/* You can also define other routes like /tour, which will render the Homepage */}
          <Route path="/tour" element={<Homepage />} />
          
          {/* Route for Destinations */}
          <Route path="/destination" element={<Destination />} />
          
          {/* Route for Packages */}
          <Route path="/packages" element={<Pakages />} />
          
          {/* Specific pages for Kolukumalai and Meeshapulimala */}
          <Route path="/kolukumalai" element={<KolukumalaiPage />} />
          <Route path="/meeshapulimala" element={<MeeshapulimalaPage />} />
          <Route path="/tentandtrek" element={<TentandTrek />} />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
