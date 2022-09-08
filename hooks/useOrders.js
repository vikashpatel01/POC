import React from "react";
import axiosConfig from "../axiosConfig";
import { useQuery } from "react-query";

export default function useOrders() {
  return useQuery("orders", () => axiosConfig.get("/").then((res) => res.data));
}
