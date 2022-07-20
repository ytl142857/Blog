import { $http } from "@utils/http";
import { ICommonResList } from "@models";

export const registerUser = async (params: {
  username: string;
  password: string;
}) => {
  return $http.post("api/user/register", params);
};

export const getUserList = async () => {
  return $http.get<ICommonResList<{ username: string }>>("api/user/list");
};
