import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { ServicesSection } from "@/components/services-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { NewsSection } from "@/components/news-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />

        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Welcome to TISU Medical Hub</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Providing impeccable healthcare services, TISU Medical Hub is one of the largest private medical centers
              in Uzbekistan. Our most valuable priority is your health.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-muted rounded-lg p-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground font-medium">Open every day</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground font-medium">Treatment directions</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">57+</div>
                <div className="text-muted-foreground font-medium">Treatment methods</div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <AdvantagesSection />

        <NewsSection />

        <ContactSection />
      </main>
    </div>
  )
}
