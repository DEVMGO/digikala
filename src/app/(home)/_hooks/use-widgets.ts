import { useQuery } from "@tanstack/react-query";
import { getWidgetsData } from "../_api/api";

export const useGetWidgetsData = () => {
  return useQuery({
    queryFn: () => getWidgetsData(),
    queryKey: ["get-widgets"],
  });
};
