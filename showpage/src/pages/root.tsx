import React from "react";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "@layouts";

import { HomePage } from "./home";
import { AboutPage } from "./about";

export const Root = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};
