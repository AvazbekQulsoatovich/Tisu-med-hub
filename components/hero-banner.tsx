"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const bannerImages = [
  {
    url: "/modern-medical-clinic-orange.png",
    title: "Advanced Medical Care",
    subtitle: "State-of-the-art facilities for your health",
  },
  {
    url: "/placeholder-ltcl0.png",
    title: "Expert Medical Team",
    subtitle: "24+ experienced doctors at your service",
  },
  {
    url: "/modern-diagnostic-equipment.png",
    title: "Modern Diagnostics",
    subtitle: "6 modern diagnostic devices for accurate results",
  },
  {
    url: "/comfortable-patient-room.png",
    title: "Patient Comfort",
    subtitle: "Your comfort and care is our priority",
  },
]

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image.url || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">{image.title}</h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">{image.subtitle}</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Appointment Now
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
