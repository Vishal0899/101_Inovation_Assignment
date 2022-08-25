import React from "react";
import { Routes, Route } from "react-router-dom";
import { Favourite } from "./Favourite";
import { LandingPage } from "./LandingPage";
import { ProductPage } from "./ProductPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:product" element={<ProductPage />} />
      <Route path="/favourite" element={<Favourite />} />
    </Routes>
  );
};
