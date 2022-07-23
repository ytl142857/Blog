import React from "react";
import { ABOUT_SITE } from "@constants";
import logo from "@/assets/logo.jpg";

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center py-16">
      <div className="w-600px">
        <div className="flex justify-center">
          <img src={logo} />
        </div>
        <div className="font-semibold underline text-xl text-white bg-primary my-2 rounded px-4">
          # 关于本站 / About
        </div>
        <ul className="text-sm text-gray-800 px-4 leading-6 text-primary list-disc mb-4">
          {ABOUT_SITE.intro.map((int) => (
            <li className="mb-2" key={int}>
              {int}
            </li>
          ))}
        </ul>
        <div className="font-semibold underline text-xl text-white bg-primary my-2 rounded px-4">
          # 我的经历 / Experience
        </div>
        {ABOUT_SITE.projects.map((project) => (
          <div
            key={project.title}
            className="my-4 border-0 border-primary border-solid border-r-4 bg-third p-4 rounded"
          >
            <div className="font-semibold text-primary">{project.title}</div>
            <div className="my-2">
              <span className="text-white text-sm font-semibold bg-second px-2 rounded">
                {project.time}
              </span>
            </div>
            <ul className="my-2 text-primary">
              {project.content.map((cont) => (
                <li key={cont} className="my-1 text-sm">
                  {cont}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
