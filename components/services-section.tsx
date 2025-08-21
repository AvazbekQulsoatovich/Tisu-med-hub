import { Card, CardContent } from "@/components/ui/card"
import { Activity, Heart, Brain, Eye, Zap, Monitor, Camera, Shield } from "lucide-react"

const services = [
  { name: "Ultrasound (UZI)", icon: Monitor },
  { name: "FGDS", icon: Camera },
  { name: "ENMG", icon: Activity },
  { name: "EEG", icon: Brain },
  { name: "ECG", icon: Heart },
  { name: "EXO Holter", icon: Zap },
  { name: "3D X-ray", icon: Eye },
  { name: "Resuscitation", icon: Shield },
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive diagnostic services with state-of-the-art equipment and experienced professionals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-medium text-sm md:text-base">{service.name}</h3>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
