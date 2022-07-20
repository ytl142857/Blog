import { $http } from "@utils/http";

export const login = async (params: { username: string; password: string }) => {
  return $http.post<{ data: { token: string; userName: string } }>(
    "/api/user/login",
    params
  );
};
