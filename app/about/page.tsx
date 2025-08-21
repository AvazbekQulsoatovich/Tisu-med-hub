"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Award, Heart, Users, Shield, Target, Eye } from "lucide-react"

const certificates = [
  {
    title: "ISO 9001:2015 Quality Management",
    issuer: "International Organization for Standardization",
    year: "2023",
    image: "/placeholder-wpkmn.png",
  },
  {
    title: "Ministry of Health License",
    issuer: "Republic of Uzbekistan Ministry of Health",
    year: "2023",
    image: "/medical-license-certificate.png",
  },
  {
    title: "International Accreditation",
    issuer: "Joint Commission International",
    year: "2022",
    image: "/placeholder-sjqn0.png",
  },
  {
    title: "Excellence in Patient Care Award",
    issuer: "Uzbekistan Medical Association",
    year: "2023",
    image: "/placeholder-1ejzi.png",
  },
  {
    title: "Best Private Medical Center",
    issuer: "Healthcare Excellence Awards",
    year: "2022",
    image: "/placeholder-r98ew.png",
  },
]

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every decision we make is guided by what's best for our patients' health and wellbeing.",
  },
  {
    icon: Shield,
    title: "Safety & Quality",
    description: "We maintain the highest standards of medical safety and quality in all our procedures.",
  },
  {
    icon: Users,
    title: "Compassionate Service",
    description: "We treat every patient with dignity, respect, and genuine care for their individual needs.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We continuously strive for excellence in medical care, technology, and patient experience.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We believe in honest, clear communication about treatments, costs, and outcomes.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace cutting-edge medical technology and innovative treatment approaches.",
  },
]

export default function AboutPage() {
  const [currentCertificate, setCurrentCertificate] = useState(0)

  const nextCertificate = () => {
    setCurrentCertificate((prev) => (prev + 1) % certificates.length)
  }

  const prevCertificate = () => {
    setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">About TISU Medical Hub</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted healthcare excellence for over 15 years, serving Uzbekistan and beyond
            </p>
          </div>
        </section>

        {/* Main Description */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                TISU Medical Hub has been operating for more than 15 years and is recognized as one of the first private
                medical centers in Uzbekistan, trusted both locally and internationally. Our commitment to excellence
                has made us a leading healthcare provider in the region.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our humble beginnings to becoming one of the largest private medical centers in Uzbekistan, we have
                consistently focused on providing impeccable healthcare services. Our state-of-the-art facilities,
                experienced medical professionals, and patient-centered approach have earned us the trust of thousands
                of patients over the years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-card p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Patients Served</div>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-muted-foreground">Convenient Locations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide exceptional healthcare services that exceed patient expectations through innovative
                    medical technology, compassionate care, and a commitment to continuous improvement. We strive to be
                    the healthcare provider of choice in Uzbekistan and the region.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                      <Eye className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading medical center in Central Asia, recognized for our excellence in patient care,
                    medical innovation, and contribution to the advancement of healthcare. We envision a future where
                    quality healthcare is accessible to all.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and shape our commitment to exceptional healthcare
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Certificates & Awards */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Certificates & Awards</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Recognition of our commitment to excellence and quality in healthcare services
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-96">
                    <img
                      src={certificates[currentCertificate].image || "/placeholder.svg"}
                      alt={certificates[currentCertificate].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end">
                      <div className="p-8 text-white">
                        <h3 className="font-serif text-2xl font-bold mb-2">{certificates[currentCertificate].title}</h3>
                        <p className="text-white/90 mb-1">{certificates[currentCertificate].issuer}</p>
                        <p className="text-white/80">{certificates[currentCertificate].year}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <button
                onClick={prevCertificate}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextCertificate}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCertificate(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentCertificate ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Experience Excellence in Healthcare</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of satisfied patients who have trusted TISU Medical Hub with their health and wellbeing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
