export interface ICommonRes<T> {
  code: number;
  data: T;
  message: string;
}

export interface ICommonResList<T> {
  code: number;
  data: {
    items: T[];
    total: number;
  };
  message: string;
}
