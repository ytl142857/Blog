import React from "react";
import { useNavigate } from "react-router-dom";

const ROUTES = [
  { title: "文章", link: "/" },
  { title: "关于我", link: "/about" },
];

export const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="h-16 flex justify-between items-center px-12 flex-none">
      <div className="transition text-xl font-semibold text-primary border-primary border-0 border-solid border-b-4 p-2 cursor-default">
        Chestnutttt Site
      </div>
      <div>
        {ROUTES.map((route) => (
          <button
            key={route.title}
            onClick={() => navigate(route.link)}
            className="transition bg-primary bg-opacity-20 border-0 text-lg font-semibold px-4 py-2 ml-4 rounded-lg hover:bg-opacity-100 hover:text-white cursor-pointer"
          >
            {route.title}
          </button>
        ))}
      </div>
    </div>
  );
};
