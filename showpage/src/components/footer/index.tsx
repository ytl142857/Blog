import React from "react";

const linkClassName = "no-underline text-gray-500 hover:text-gray-800 ml-2";

export const FooterComponent = () => {
  return (
    <div className="h-16 flex justify-center items-center text-sm font-light text-gray-500 border-solid border-0 border-t border-primary flex-none">
      <span>{new Date().getFullYear()} Chestnutttt</span>
      <a
        className={linkClassName}
        target="_blank"
        href="https://beian.miit.gov.cn/"
      >
        渝ICP备2022002492号-1
      </a>
      <a
        className={linkClassName}
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011202503295"
      >
        渝公网安备 50011202503295号
      </a>
    </div>
  );
};
