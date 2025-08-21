import { Card, CardContent } from "@/components/ui/card"
import { User, Users, MapPin } from "lucide-react"

const advantages = [
  {
    icon: User,
    title: "Individual approach to each patient",
    description: "Personalized treatment plans tailored to your specific needs and health conditions",
  },
  {
    icon: Users,
    title: "Family programs",
    description: "Comprehensive healthcare packages designed for families with special discounts",
  },
  {
    icon: MapPin,
    title: "Convenient location",
    description: "Easily accessible locations in Termez and Tashkent with excellent transport links",
  },
]

export function AdvantagesSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Advantages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What makes TISU Medical Hub the preferred choice for healthcare in Uzbekistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10">
                      <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
