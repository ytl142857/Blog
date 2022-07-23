import { $http } from "@utils/http";
import { ICommonResList } from "@models";
import { IArticle } from "../models";

export const getArticleList = async () => {
  return $http.get<ICommonResList<IArticle>>("api/article/list");
};
