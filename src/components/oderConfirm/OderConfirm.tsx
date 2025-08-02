import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  // In a real application, the order ID would be passed via query parameters or context
  const orderId = "XYZ123456"

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-950">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="space-y-4">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <CardTitle className="text-3xl font-bold">Thank You for Your Order!</CardTitle>
          <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
            Your order <span className="font-semibold">#{orderId}</span> has been successfully placed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            You will receive an email confirmation shortly with your order details and tracking information.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Please allow 24-48 hours for tracking information to become available.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Link href="/" passHref>
            <Button className="w-full cursor-pointer">Continue Shopping</Button>
          </Link>
          <Link href="/orders" passHref>
            <Button variant="outline" className="w-full bg-transparent cursor-pointer">
              View Order History
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
