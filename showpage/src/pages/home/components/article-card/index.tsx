import React from "react";
import { IArticle } from "@pages/home/models";
import dayjs from "@utils/dayjs";

export const ArticleCard = ({ article }: { article: IArticle }) => {
  const onOpenArticle = () => {
    window.open(article.link);
  };

  return (
    <div
      className="transition w-600px mb-8 cursor-pointer p-8 hover:bg-third ring-gray-300 hover:ring-primary ring-4 rounded"
      onClick={onOpenArticle}
    >
      <div className="flex">
        <div className="h-7 flex bg-primary px-2 text-xs font-semibold text-white items-center rounded">
          {article.classfication}
        </div>
        <div className="text-primary font-semibold text-xl ml-4">
          {article.title}
        </div>
      </div>
      <div></div>
      <div>
        <p className="font-medium text-gray-500">{article.content}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          {article.tags?.map((tag) => (
            <div
              key={tag}
              className="bg-second px-1 text-xs font-semibold text-white mr-2 rounded"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="text-xs text-primary font-semibold">
          {dayjs(article.createTime).format("YYYY-MM-DD HH:mm:ss")}
        </div>
      </div>
    </div>
  );
};
