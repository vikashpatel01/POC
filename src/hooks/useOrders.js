import axiosConfig from "../../axiosConfig";
import { useQuery } from "react-query";

export default function useOrders() {
  return useQuery("orders", () =>
    axiosConfig.get("/orders").then((res) => res.data)
  );
}
