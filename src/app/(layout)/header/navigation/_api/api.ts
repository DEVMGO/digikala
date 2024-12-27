import { httpService } from "@/app/config/http-service";

export const getHeaderData = async () => {
  const response = await httpService.get(`/v1/user/init/`);
  return response.data;
};
