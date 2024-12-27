import cookies from "js-cookie";

export const getToken = () => cookies.get("access") ?? "";
