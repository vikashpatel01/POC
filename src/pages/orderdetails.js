import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosConfig from "../../axiosConfig";
import useOrder from "../hooks/useOrder";

const OrderDetails = () => {
  const router = useRouter();
  const { data: orderData } = useOrder(router.query.customerId);
  const [foundOrder, setFoundOrder] = useState({
    customerName: "",
    customerId: "",
    orderNumber: "",
    enquiryId: "",
    orderDate: "",
  });

  useEffect(() => {
    if (orderData) {
      setFoundOrder(orderData);
    }
  }, [orderData]);

  const updateOrderDetails = () => {
    axiosConfig
      .patch(`/orders/${router.query.customerId}`, {
        customerName: foundOrder.customerName,
      })
      .then((res) => {
        router.back();
      });
  };

  const handleChange = (e) => {
    setFoundOrder((order) => ({
      ...order,
      [e.target.id]: e.target.value,
    }));
  };

  if (foundOrder) {
    return (
      <div className="min-height flex justify-center items-center py-5">
        <div className="bg-white px-3 py-4 rounded-lg shadow-sm max-w-xl container mx-auto">
          <h2 className="text-black text-lg font-semibold py-2 text-center">
            Order Details
          </h2>
          <form>
            <div className="mb-3">
              <label
                htmlFor="customerName"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Customer name
              </label>
              <input
                type="text"
                className="form-element"
                id="customerName"
                placeholder="Customer Name"
                onChange={handleChange}
                value={foundOrder.customerName}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="customerId"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Customer Id
              </label>
              <input
                type="text"
                className="form-element"
                id="customerId"
                placeholder="Customer Id"
                defaultValue={foundOrder.customerId}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="orderNumber"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Order Number
              </label>
              <input
                type="text"
                className="form-element"
                id="orderNumber"
                placeholder="Order Number"
                defaultValue={foundOrder.orderNumber}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="enquiryId"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Enquiry Id
              </label>
              <input
                type="text"
                className="form-element"
                id="enquiryId"
                placeholder="Enquiry Id"
                defaultValue={foundOrder.enquiryId}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="orderDate"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Order Date
              </label>
              <input
                type="text"
                className="form-element"
                id="orderDate"
                placeholder="Order Date"
                defaultValue={foundOrder.orderDate}
              />
            </div>
            <div className="flex space-x-2 justify-center">
              <button
                type="button"
                onClick={updateOrderDetails}
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return <></>;
};

export default OrderDetails;
