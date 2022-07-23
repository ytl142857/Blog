export interface IArticle {
  id: string;
  title: string;
  tags?: string[];
  classfication: string;
  createTime: string;
  link: string;
  content?: string;
}
