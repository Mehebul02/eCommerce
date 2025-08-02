import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to work together? Fill out the form below or reach out using our contact details.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>We will get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Regarding your services..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." className="min-h-[120px]" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
          <div className="flex flex-col space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">
                Feel free to reach out to us through any of the following channels.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">123 Main Street, Anytown, USA 12345</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">info@example.com</p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
