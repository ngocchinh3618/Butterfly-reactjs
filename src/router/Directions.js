import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Index from "../components/page";
import PortfolioDetails from "../components/page/Portfolio/Portfolio-detail";

export default function Directions() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/portfolio-details/:id" element={<PortfolioDetails />} /> */}
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
