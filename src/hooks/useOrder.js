import axiosConfig from "../../axiosConfig";
import { useQuery } from "react-query";

export const fetchOrder = (customerId) =>
  axiosConfig.get(`/orders/${customerId}`).then((res) => res.data);

export default function useOrder(customerId) {
  return useQuery(["orders", customerId], () => fetchOrder(customerId), {
    enabled: Boolean(customerId),
  });
}
