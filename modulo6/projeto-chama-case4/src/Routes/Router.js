import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HistoryPage from "../Pages/HistoryPage/HistoryPage";
import SearchPage from "../Pages/SearchPage/SearchPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SearchPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
