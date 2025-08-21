import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Brain,
  Baby,
  Stethoscope,
  Bone,
  Ear,
  Scissors,
  Users,
  Shield,
  Sparkles,
  Activity,
  Zap,
} from "lucide-react"

const treatmentDirections = [
  { name: "Cardiology", icon: Heart, description: "Heart and cardiovascular system treatment" },
  { name: "Neurology", icon: Brain, description: "Nervous system disorders and brain health" },
  { name: "Pediatrics", icon: Baby, description: "Specialized care for children and infants" },
  { name: "Urology", icon: Stethoscope, description: "Urinary system and male reproductive health" },
  { name: "Traumatology", icon: Bone, description: "Bone, joint, and musculoskeletal injuries" },
  { name: "Otolaryngology", icon: Ear, description: "Ear, nose, and throat conditions" },
  { name: "Surgery", icon: Scissors, description: "General and specialized surgical procedures" },
  { name: "Gynecology", icon: Users, description: "Women's reproductive health and wellness" },
  { name: "Allergology", icon: Shield, description: "Allergy testing and immunology treatment" },
  { name: "Cosmetology", icon: Sparkles, description: "Aesthetic and cosmetic medical procedures" },
  { name: "Therapy", icon: Activity, description: "General internal medicine and primary care" },
  { name: "Endocrinology", icon: Zap, description: "Hormone disorders and metabolic conditions" },
]

export default function TreatmentDirectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Treatment Directions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive medical specialties with expert doctors and modern equipment for all your healthcare needs
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-card p-8 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">60</div>
                <div className="text-muted-foreground font-medium">Medical directions</div>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24</div>
                <div className="text-muted-foreground font-medium">Expert doctors</div>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground font-medium">Modern devices</div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Directions Grid */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Medical Specialties</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Expert care across multiple medical disciplines with state-of-the-art facilities and experienced
                specialists
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatmentDirections.map((direction, index) => {
                const IconComponent = direction.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <div className="mb-6 flex justify-center">
                        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-serif text-xl font-semibold mb-3">{direction.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{direction.description}</p>
                      <div className="text-primary text-sm font-medium group-hover:underline">Learn More →</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Our Treatment */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Why Choose Our Treatment</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Advanced medical care with personalized treatment plans and cutting-edge technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">24/7</span>
                </div>
                <h3 className="font-semibold mb-2">Round-the-Clock Care</h3>
                <p className="text-sm text-muted-foreground">Emergency services available 24 hours a day</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">15+</span>
                </div>
                <h3 className="font-semibold mb-2">Years of Experience</h3>
                <p className="text-sm text-muted-foreground">Over 15 years serving the community</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">100+</span>
                </div>
                <h3 className="font-semibold mb-2">Successful Surgeries</h3>
                <p className="text-sm text-muted-foreground">Hundreds of successful procedures performed</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">★★★★★</span>
                </div>
                <h3 className="font-semibold mb-2">Patient Satisfaction</h3>
                <p className="text-sm text-muted-foreground">Highest rated medical center in the region</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
