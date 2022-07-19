import React from "react";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "@layouts";

import { LoginPage } from "./login";
import { HomePage } from "./home";
import { ArticlesPage } from "./articles";
import { UserPage } from "./users";

export const Root = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="home" element={<HomePage />}></Route>
            <Route path="articles" element={<ArticlesPage />}></Route>
            <Route path="user" element={<UserPage />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};
