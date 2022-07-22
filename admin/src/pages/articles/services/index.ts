import { $http } from "@utils/http";
import { ICommonResList } from "@models";
import { IArticle } from "../models";

export const getArticleList = async () => {
  return $http.get<ICommonResList<IArticle>>("api/article/list");
};

export const addArticle = async (article: IArticle) => {
  return $http.post("api/article", article);
};

export const putArticle = async (article: IArticle) => {
  return $http.put("api/article", article);
};

export const deleteArticle = async (params: { id: string }) => {
  return $http.post("api/article/delete", params);
};
