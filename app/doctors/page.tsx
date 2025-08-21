import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Star, Award, Calendar, Stethoscope } from "lucide-react"

const chiefDoctor = {
  name: "Ilyos Khursandov Akhmedovich",
  position: "Chief Doctor",
  specialty: "Urologist",
  experience: 10,
  surgeries: 48,
  degrees: 2,
  image: "/professional-doctor-portrait.png",
  description:
    "Leading urologist with extensive experience in minimally invasive procedures and patient care excellence.",
}

const doctors = [
  {
    name: "Abdullayev Shohobiddin",
    specialty: "Neurologist",
    experience: 6,
    image: "/neurologist-portrait.png",
  },
  {
    name: "Aliyeva Munira",
    specialty: "Cardiologist",
    experience: 10,
    image: "/female-cardiologist-portrait.png",
  },
  {
    name: "Saidov Diyorbek",
    specialty: "Traumatologist",
    experience: 8,
    image: "/traumatologist-doctor-portrait.png",
  },
  {
    name: "Nazarova Malika",
    specialty: "Dermatologist",
    experience: 7,
    image: "/female-dermatologist-portrait.png",
  },
  {
    name: "Toshpulatov Bekzod",
    specialty: "Urologist",
    experience: 12,
    image: "/placeholder-1bgae.png",
  },
  {
    name: "Islomova Dildora",
    specialty: "Gynecologist",
    experience: 9,
    image: "/female-gynecologist-portrait.png",
  },
  {
    name: "Rustamov Shavkat",
    specialty: "Pediatrician",
    experience: 5,
    image: "/placeholder-42lcj.png",
  },
  {
    name: "G'ofurova Dilshoda",
    specialty: "Oncologist",
    experience: 11,
    image: "/female-oncologist-portrait.png",
  },
  {
    name: "Karimov Jasur",
    specialty: "Psychiatrist",
    experience: 6,
    image: "/psychiatrist-doctor-portrait.png",
  },
  {
    name: "Sattorova Iroda",
    specialty: "Endocrinologist",
    experience: 10,
    image: "/placeholder-o7vw2.png",
  },
  {
    name: "Xolmatov Komil",
    specialty: "Orthopedic",
    experience: 8,
    image: "/orthopedic-doctor-portrait.png",
  },
  {
    name: "Jalolova Mohira",
    specialty: "Neuropathologist",
    experience: 7,
    image: "/placeholder-67qog.png",
  },
]

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Medical Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet our experienced doctors dedicated to providing exceptional healthcare with compassion and expertise
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-card p-8 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24+</div>
                <div className="text-muted-foreground font-medium">Experienced doctors</div>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground font-medium">Minimum years of experience</div>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground font-medium">Surgeries performed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Chief Doctor */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Chief Doctor</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Leading our medical team with excellence and dedication to patient care
              </p>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <img
                      src={chiefDoctor.image || "/placeholder.svg"}
                      alt={chiefDoctor.name}
                      className="w-64 h-64 rounded-full mx-auto md:mx-0 object-cover mb-6"
                    />
                  </div>
                  <div>
                    <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Chief Doctor</Badge>
                    <h3 className="font-serif text-2xl font-bold mb-2">{chiefDoctor.name}</h3>
                    <p className="text-lg text-primary font-semibold mb-4">{chiefDoctor.specialty}</p>
                    <p className="text-muted-foreground mb-6">{chiefDoctor.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-semibold">{chiefDoctor.experience} years</div>
                          <div className="text-sm text-muted-foreground">Experience</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Stethoscope className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-semibold">{chiefDoctor.surgeries} surgeries</div>
                          <div className="text-sm text-muted-foreground">Performed</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-semibold">{chiefDoctor.degrees} degrees</div>
                          <div className="text-sm text-muted-foreground">Higher education</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-semibold">5.0 rating</div>
                          <div className="text-sm text-muted-foreground">Patient reviews</div>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-primary hover:bg-primary/90">Book Consultation</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Medical Specialists</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experienced doctors across various specialties committed to your health and wellbeing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {doctors.map((doctor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                    />
                    <h3 className="font-serif text-lg font-semibold mb-2">{doctor.name}</h3>
                    <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{doctor.experience} years experience</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Book Appointment
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Form */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Book Doctor Appointment</h2>
              <p className="text-muted-foreground">
                Schedule a consultation with our experienced medical professionals
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
                    <Label htmlFor="doctor">Select Doctor</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={chiefDoctor.name}>
                          {chiefDoctor.name} - {chiefDoctor.specialty}
                        </SelectItem>
                        {doctors.map((doctor, index) => (
                          <SelectItem key={index} value={doctor.name}>
                            {doctor.name} - {doctor.specialty}
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
                    <Label htmlFor="message">Reason for Visit</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your symptoms or reason for consultation..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Book Appointment
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
