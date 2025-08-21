import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const services = [
  {
    name: "Endovenous laser ablation (mini, 1 leg, type 1)",
    price: "10,400,000",
    currency: "UZS",
  },
  {
    name: "Oncomammology surgery",
    price: "4,700,000",
    currency: "UZS",
  },
  {
    name: "Microsurgical reconstruction with vascular anastomosis",
    price: "50,400,000",
    currency: "UZS",
  },
  {
    name: "Pacemaker implantation (ECG free)",
    price: "7,900,000",
    currency: "UZS",
  },
  {
    name: "Ultrasound examination (UZI)",
    price: "150,000",
    currency: "UZS",
  },
  {
    name: "FGDS (Fibrogastroduodenoscopy)",
    price: "300,000",
    currency: "UZS",
  },
  {
    name: "ENMG (Electroneuromyography)",
    price: "400,000",
    currency: "UZS",
  },
  {
    name: "EEG (Electroencephalography)",
    price: "250,000",
    currency: "UZS",
  },
  {
    name: "ECG (Electrocardiography)",
    price: "100,000",
    currency: "UZS",
  },
  {
    name: "EXO Holter monitoring",
    price: "500,000",
    currency: "UZS",
  },
  {
    name: "3D X-ray examination",
    price: "350,000",
    currency: "UZS",
  },
  {
    name: "Resuscitation services",
    price: "2,000,000",
    currency: "UZS",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive medical services with transparent pricing and world-class care
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-card p-8 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">60</div>
                <div className="text-muted-foreground font-medium">Service types available</div>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24</div>
                <div className="text-muted-foreground font-medium">Experienced doctors</div>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground font-medium">Modern diagnostic devices</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Service Pricing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transparent pricing for all our medical services. All prices are starting from the listed amount.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Starting from</span>
                          <span className="text-2xl font-bold text-primary">
                            {service.price} {service.currency}
                          </span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Form */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Book an Appointment</h2>
              <p className="text-muted-foreground">
                Schedule your appointment online and we'll get back to you within 24 hours
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+998 XX XXX XX XX" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Select Service</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.name}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">09:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="14:00">02:00 PM</SelectItem>
                          <SelectItem value="15:00">03:00 PM</SelectItem>
                          <SelectItem value="16:00">04:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your symptoms or any specific requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Submit Appointment Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
