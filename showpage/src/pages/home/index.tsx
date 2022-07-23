import React, { useState, useEffect } from "react";
import { getArticleList } from "./services";
import { IArticle } from "./models";
import { ArticleCard } from "./components/article-card";

export const HomePage = () => {
  const [articleList, setArticleList] = useState<IArticle[]>([]);

  useEffect(() => {
    getArticleList().then((res) => {
      setArticleList(res.data.data.items);
    });
  }, []);

  return (
    <div className="flex flex-col items-center py-16">
      {articleList.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};
