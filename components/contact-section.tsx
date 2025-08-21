import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Contact Information</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us at our convenient locations or get in touch for appointments and inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Address 1 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Termez Location</h3>
                  <p className="text-muted-foreground mb-2">
                    Surkhandarya region, Termez city, Qorliq town, Navruz neighborhood, house 65
                  </p>
                  <p className="text-sm text-muted-foreground">Landmark: Near Green Bazaar</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address 2 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tashkent Location</h3>
                  <p className="text-muted-foreground">Yakkasaroy district, Small Ring Road, house 70A</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone Numbers</h3>
              <p className="text-muted-foreground">+998 95 412 07 07</p>
              <p className="text-muted-foreground">+998 99 900 10 10</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@tisu.uz</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Working Hours</h3>
              <p className="text-muted-foreground">24/7</p>
              <p className="text-sm text-muted-foreground">Open every day</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
