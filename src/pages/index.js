import React from "react";
import Link from "next/link";
import useOrders from "../hooks/useOrders";
import { Loader } from "../components";

export default function OrderListing() {
  const { data: orders, isLoading } = useOrders();

  return (
    <div className="min-height flex justify-center items-center">
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="bg-white p-2 rounded-lg shadow-sm">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <caption className="text-black text-lg font-semibold text-center">
                      Order Booking
                    </caption>
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Customer name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Customer Id
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Order number
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Enquiry Id
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Order date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <Link
                          href={{
                            pathname: "/orderdetails",
                            query: { orderNumber: order.orderNumber },
                          }}
                          key={index}
                        >
                          <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {order.customerName}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {order.customerId}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {order.orderNumber}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {order.enquiryId}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {order.orderDate}
                            </td>
                          </tr>
                        </Link>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
