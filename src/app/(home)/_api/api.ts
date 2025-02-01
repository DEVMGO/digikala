import { httpService } from "@/app/config/http-service";
import { WidgetsResponse } from "../_types/types";

export const getWidgetsData = async (): Promise<WidgetsResponse> => {
  const response = await httpService.get(`/v2/`);
  return response.data;
};
