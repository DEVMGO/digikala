import { httpService } from "@/app/config/http-service";
import { HeaderDataType } from "./types";

export const getHeaderData = async (): Promise<HeaderDataType> => {
  const response = await httpService.get(`/v1/user/init/`);
  return response.data;
};
