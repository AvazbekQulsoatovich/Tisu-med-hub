import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Navigation, Building } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with TISU Medical Hub for appointments, inquiries, or emergency services
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visit us at our convenient locations in Termez and Tashkent, or contact us through any of the methods
                below
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Termez Location */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold mb-2">Termez Location</h3>
                      <p className="text-muted-foreground">Main Medical Center</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">
                          Surkhandarya region, Termez city, Qorliq town, Navruz neighborhood, house 65
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Landmark: Near Green Bazaar</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Navigation className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Getting There</p>
                        <p className="text-muted-foreground text-sm">
                          Easily accessible by public transport and private vehicle. Parking available on-site.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">Get Directions</Button>
                </CardContent>
              </Card>

              {/* Tashkent Location */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold mb-2">Tashkent Location</h3>
                      <p className="text-muted-foreground">Branch Office</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">Yakkasaroy district, Small Ring Road, house 70A</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Navigation className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">Getting There</p>
                        <p className="text-muted-foreground text-sm">
                          Located on Small Ring Road with excellent transport connections throughout Tashkent.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">Get Directions</Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Phone Numbers</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">+998 95 412 07 07</p>
                    <p className="text-muted-foreground">+998 99 900 10 10</p>
                  </div>
                  <Button variant="outline" className="mt-4 w-full bg-transparent">
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Email</h3>
                  <p className="text-muted-foreground mb-4">info@tisu.uz</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Working Hours</h3>
                  <div className="space-y-1">
                    <p className="text-muted-foreground font-medium">24/7</p>
                    <p className="text-sm text-muted-foreground">Open every day</p>
                    <p className="text-sm text-muted-foreground">Emergency services available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Have a question or need assistance? Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+998 XX XXX XX XX" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="appointment">Appointment Booking</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Preferred Location</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="termez">Termez Location</SelectItem>
                        <SelectItem value="tashkent">Tashkent Location</SelectItem>
                        <SelectItem value="either">Either Location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your inquiry or provide additional details..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="consent" className="rounded" />
                    <Label htmlFor="consent" className="text-sm">
                      I agree to the processing of my personal data for the purpose of responding to my inquiry
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl font-bold mb-4 text-destructive">Emergency Contact</h2>
              <p className="text-muted-foreground mb-6">
                For medical emergencies, please call our emergency hotline immediately or visit the nearest emergency
                room
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-destructive hover:bg-destructive/90">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency: +998 95 412 07 07
                </Button>
                <Button size="lg" variant="outline">
                  Find Emergency Room
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
