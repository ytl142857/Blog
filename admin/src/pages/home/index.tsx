import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div
        className="w-full rounded text-xl font-bold p-4 hover:ring-4 ring-red-200"
        style={{ color: "#fff", background: "#9f353a" }}
      >
        后台管理系统主页
      </div>
    </>
  );
};
