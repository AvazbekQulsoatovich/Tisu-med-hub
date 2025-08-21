import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "New Cardiology Department Opens",
    excerpt:
      "TISU Medical Hub expands its services with a state-of-the-art cardiology department featuring the latest diagnostic equipment.",
    date: "2024-01-15",
    image: "/placeholder-m4vvn.png",
  },
  {
    id: 2,
    title: "Advanced 3D X-ray Technology",
    excerpt:
      "We've introduced cutting-edge 3D X-ray technology for more accurate diagnoses and better patient outcomes.",
    date: "2024-01-10",
    image: "/3d-xray-machine.png",
  },
  {
    id: 3,
    title: "Family Health Program Launch",
    excerpt:
      "New comprehensive family health packages now available with special discounts for multiple family members.",
    date: "2024-01-05",
    image: "/placeholder-v7kdd.png",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
            <p className="text-muted-foreground">Stay updated with our latest developments and healthcare insights</p>
          </div>
          <Button variant="outline" className="hidden md:flex items-center gap-2 bg-transparent">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read more <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" className="flex items-center gap-2 mx-auto bg-transparent">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
