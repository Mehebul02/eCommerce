/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Truck, Phone, User } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { clearCart } from "@/redux/feature/cartSlice"
import { useAppDispatch } from "@/redux/hooks/hooks"
import { addOrder } from "@/redux/feature/orderSlice"
import { useRouter } from "next/navigation"

interface FormData {
  fullName: string
  shippingAddress: string
  phoneNumber: string
}

interface FormErrors {
  fullName?: string
  shippingAddress?: string
  phoneNumber?: string
}

const CheckOutForm = ({ cartItems, total }: { cartItems: any[]; total: number }) => {
  const route = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    shippingAddress: "",
    phoneNumber: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters"
    }

    if (!formData.shippingAddress.trim()) {
      newErrors.shippingAddress = "Shipping address is required"
    } else if (formData.shippingAddress.trim().length < 10) {
      newErrors.shippingAddress = "Please enter a complete address"
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
    } else if (!/^\+?[\d\s\-]{10,}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true) // Start loading

    setTimeout(() => {
      const order = {
        id: `order-${Date.now()}`,
        items: cartItems,
        customerInfo: formData,
        total,
        date: new Date().toISOString(),
      }

      dispatch(addOrder(order))
      dispatch(clearCart())
      setIsSubmitted(true)
      setIsLoading(false) // Stop loading before redirect
      route.push("/thank_you")
    }, 1000) // Simulate network delay
  }

  if (isSubmitted) {
    return null // Redirect handled by route.push
  }

  return (
    <div>
      <div className="lg:order-1">
        <Card>
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  className={errors.fullName ? "border-red-500" : ""}
                />
                {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
              </div>

              {/* Shipping Address */}
              <div className="space-y-2">
                <Label htmlFor="shippingAddress" className="flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  Shipping Address
                </Label>
                <Textarea
                  id="shippingAddress"
                  value={formData.shippingAddress}
                  onChange={(e) => handleInputChange("shippingAddress", e.target.value)}
                  placeholder="Enter your complete shipping address"
                  rows={3}
                  className={errors.shippingAddress ? "border-red-500" : ""}
                />
                {errors.shippingAddress && <p className="text-sm text-red-500">{errors.shippingAddress}</p>}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  placeholder="Enter your phone number"
                  className={errors.phoneNumber ? "border-red-500" : ""}
                />
                {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber}</p>}
              </div>

              <Button
                type="submit"
                className="w-full cursor-pointer"
                size="lg"
                disabled={isLoading || cartItems.length === 0}
              >
                {isLoading ? "Placing Order..." : `Place Order - $${total.toFixed(2)}`}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CheckOutForm
