export interface IArticle {
  id?: string;
  title: string;
  tags?: string[];
  classfication: string;
  createTime: string;
  link: string;
}

export type IModalType = "create" | "edit" | "detail";
