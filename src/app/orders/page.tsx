"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import Link from "next/link";

export default function OrdersPage() {
  const orders = useAppSelector((state) => state.orders.orders);

  if (orders.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No orders placed yet.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Customer Name</th>
            <th className="border p-2">Total Items</th>
            <th className="border p-2">Total Amount</th>
            <th className="border p-2">Order Date</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.customerInfo.fullName}</td>
              <td className="border p-2">{order.items.length}</td>
              <td className="border p-2">${order.total.toFixed(2)}</td>
              <td className="border p-2">{new Date(order.date).toLocaleString()}</td>
              <td className="border p-2">
                <Link href={`/orders/${order.id}`} className="text-blue-500 underline">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
