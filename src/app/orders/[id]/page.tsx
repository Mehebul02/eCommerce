// app/orders/[id]/page.tsx
'use client'
import { useParams, useRouter } from "next/navigation"
import { useAppSelector } from "@/redux/hooks/hooks"
import Image from "next/image"

export default function OrderDetailsPage() {
  const { id } = useParams()
  const router = useRouter()
  const orders = useAppSelector((state) => state.orders.orders)

  const order = orders.find((o) => o.id === id)

  if (!order) {
    return <div className="p-6 text-center text-red-500">Order not found.</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="mb-4 text-blue-500 hover:underline"
      >
        ← Back to Orders
      </button>

      <h1 className="text-2xl font-bold mb-4">Order Details</h1>

      <div className="border p-4 rounded-lg mb-6">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Customer:</strong> {order.customerInfo.fullName}</p>
        <p><strong>Phone:</strong> {order.customerInfo.phoneNumber}</p>
        <p><strong>Address:</strong> {order.customerInfo.shippingAddress}</p>
        <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
        <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
      </div>

      <h2 className="text-xl font-semibold mb-2">Items</h2>
      <div className="space-y-4">
        {order.items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border p-3 rounded-lg">
            <Image src={item.image} alt={item.name} width={60} height={60} className="rounded" />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
