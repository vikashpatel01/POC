import axiosConfig from "../../axiosConfig";
import { useQuery } from "react-query";

export const fetchOrder = (orderNumber) =>
  axiosConfig.get(`/orders/${orderNumber}`).then((res) => res.data);

export default function useOrder(orderNumber) {
  return useQuery(["orders", orderNumber], () => fetchOrder(orderNumber), {
    enabled: Boolean(orderNumber),
  });
}
