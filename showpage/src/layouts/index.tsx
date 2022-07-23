import React from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { HeaderComponent } from "@components/header";
import { FooterComponent } from "@components/footer";

export const DefaultLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <HeaderComponent />
      <div className="flex-grow">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
};
