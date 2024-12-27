import { useQuery } from "@tanstack/react-query";
import { getHeaderData } from "../_api/api";

export const useGetHeaderData = () => {
  return useQuery({
    queryFn: () => getHeaderData(),
    queryKey: ["get-header"],
  });
};
