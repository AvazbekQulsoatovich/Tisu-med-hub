import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, User } from "lucide-react"
import Link from "next/link"

const newsArticles = [
  {
    id: 1,
    title: "New Cardiology Department Opens with State-of-the-Art Equipment",
    excerpt:
      "TISU Medical Hub expands its services with a cutting-edge cardiology department featuring the latest diagnostic and treatment equipment, bringing world-class cardiac care to Uzbekistan.",
    content: `TISU Medical Hub is proud to announce the opening of our new Cardiology Department, equipped with state-of-the-art medical technology and staffed by internationally trained cardiologists.

The new department features advanced cardiac catheterization labs, 3D echocardiography systems, and the latest in cardiac monitoring technology. This expansion represents our commitment to providing comprehensive cardiovascular care to our patients.

Dr. Aliyeva Munira, our lead cardiologist with 10 years of experience, will head the department. "This new facility allows us to provide the highest level of cardiac care without patients having to travel abroad," she stated.

The department offers services including cardiac catheterization, angioplasty, pacemaker implantation, and comprehensive cardiac rehabilitation programs.`,
    date: "2024-01-15",
    author: "TISU Medical Hub",
    image: "/cardiology-department-opening.png",
    category: "Department News",
  },
  {
    id: 2,
    title: "Revolutionary 3D X-ray Technology Now Available",
    excerpt:
      "We've introduced cutting-edge 3D X-ray technology for more accurate diagnoses and better patient outcomes, setting new standards in medical imaging.",
    content: `TISU Medical Hub has invested in revolutionary 3D X-ray technology that provides unprecedented clarity and detail in medical imaging, significantly improving diagnostic accuracy.

This advanced imaging system allows our radiologists to create three-dimensional images of internal structures, providing better visualization of complex anatomical areas and enabling more precise treatment planning.

The new technology reduces radiation exposure by up to 40% compared to traditional X-ray systems while providing superior image quality. Patients can expect faster scan times and more comfortable positioning during procedures.

Dr. Saidov Diyorbek, our chief radiologist, explains: "This technology represents a quantum leap in diagnostic imaging. We can now detect conditions earlier and with greater precision than ever before."

The 3D X-ray system is particularly beneficial for orthopedic, dental, and surgical applications, allowing for better pre-operative planning and post-operative monitoring.`,
    date: "2024-01-10",
    author: "Medical Technology Team",
    image: "/3d-xray-technology-news.png",
    category: "Technology",
  },
  {
    id: 3,
    title: "Family Health Program Launch - Comprehensive Care for Families",
    excerpt:
      "New comprehensive family health packages now available with special discounts for multiple family members, making quality healthcare more accessible.",
    content: `TISU Medical Hub is excited to launch our new Family Health Program, designed to provide comprehensive healthcare solutions for entire families at affordable rates.

The program offers significant discounts for families enrolling multiple members, with packages tailored for different family sizes and health needs. Families can save up to 30% on regular consultation fees and diagnostic services.

Our Family Health Program includes:
- Annual health screenings for all family members
- Priority appointment scheduling
- Dedicated family health coordinator
- Preventive care programs for children and adults
- Emergency care coverage
- Health education and wellness programs

"We believe that healthcare should be accessible to entire families," said our Chief Medical Officer. "This program removes financial barriers and encourages families to prioritize their health together."

The program is available at both our Termez and Tashkent locations, with flexible payment options and customizable packages to meet each family's unique needs.`,
    date: "2024-01-05",
    author: "Patient Services",
    image: "/family-health-program-launch.png",
    category: "Programs",
  },
  {
    id: 4,
    title: "TISU Medical Hub Receives International Accreditation",
    excerpt:
      "Our commitment to excellence has been recognized with international accreditation, affirming our position as a leading healthcare provider in Central Asia.",
    content: `TISU Medical Hub has achieved international accreditation from the Joint Commission International (JCI), becoming one of the first private medical centers in Uzbekistan to receive this prestigious recognition.

The JCI accreditation process involved a comprehensive evaluation of our medical practices, patient safety protocols, quality management systems, and overall healthcare delivery standards.

This achievement reflects our unwavering commitment to providing world-class healthcare services and maintaining the highest international standards of medical care.

The accreditation process evaluated over 1,000 standards across various areas including:
- Patient safety and quality of care
- Infection prevention and control
- Medication management
- Staff qualifications and training
- Facility management and safety

"This accreditation validates our efforts to provide exceptional healthcare services," stated our Chief Executive Officer. "It demonstrates our commitment to continuous improvement and patient safety."

The international recognition positions TISU Medical Hub as a trusted healthcare destination for both local and international patients seeking high-quality medical care.`,
    date: "2023-12-20",
    author: "Administration",
    image: "/international-accreditation-news.png",
    category: "Awards",
  },
  {
    id: 5,
    title: "New Pediatric Wing Opens with Child-Friendly Environment",
    excerpt:
      "Our new pediatric wing creates a welcoming, child-friendly environment designed to reduce anxiety and improve the healthcare experience for young patients.",
    content: `TISU Medical Hub has opened a dedicated pediatric wing designed specifically for children, featuring colorful, child-friendly spaces that help reduce anxiety and create a positive healthcare experience.

The new wing includes specialized pediatric examination rooms, a play area, family consultation rooms, and child-sized medical equipment. The design incorporates bright colors, interactive elements, and comfortable spaces for both children and their families.

Dr. Rustamov Shavkat, our pediatrician with 5 years of experience, will lead the pediatric team. "Children deserve healthcare environments designed specifically for them," he explained. "This new wing helps us provide better care while keeping children comfortable and calm."

Features of the new pediatric wing include:
- Child-friendly examination rooms with cartoon themes
- Interactive play areas and entertainment systems
- Specialized pediatric medical equipment
- Family consultation and waiting areas
- Dedicated pediatric pharmacy
- Child life specialists to support young patients

The pediatric wing offers comprehensive services including routine check-ups, vaccinations, developmental assessments, and treatment for childhood illnesses and conditions.`,
    date: "2023-12-15",
    author: "Pediatric Department",
    image: "/pediatric-wing-opening.png",
    category: "Facilities",
  },
  {
    id: 6,
    title: "Telemedicine Services Now Available for Remote Consultations",
    excerpt:
      "Expanding access to healthcare through secure telemedicine platform, allowing patients to consult with our doctors from the comfort of their homes.",
    content: `TISU Medical Hub has launched comprehensive telemedicine services, enabling patients to access quality healthcare remotely through secure video consultations with our medical professionals.

The telemedicine platform provides convenient access to healthcare for patients who cannot visit our facilities in person, including those in remote areas, elderly patients, and individuals with mobility challenges.

Our telemedicine services include:
- Video consultations with specialists
- Remote monitoring for chronic conditions
- Follow-up appointments and medication reviews
- Health education and counseling sessions
- Prescription management and refills
- Secure messaging with healthcare providers

The platform uses advanced encryption and security measures to protect patient privacy and ensure confidential medical consultations. Patients can schedule appointments, access medical records, and receive care from licensed physicians.

"Telemedicine represents the future of healthcare delivery," noted our Chief Technology Officer. "It allows us to extend our reach and provide quality care to patients regardless of their location."

The service is available through our website and mobile app, with technical support available to help patients navigate the platform and ensure smooth consultation experiences.`,
    date: "2023-12-10",
    author: "Digital Health Team",
    image: "/telemedicine-services-launch.png",
    category: "Technology",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Latest News</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest developments, innovations, and achievements at TISU Medical Hub
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Featured Story</h2>
            </div>

            <Card className="overflow-hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-video md:aspect-auto">
                  <img
                    src={newsArticles[0].image || "/placeholder.svg"}
                    alt={newsArticles[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(newsArticles[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{newsArticles[0].author}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{newsArticles[0].title}</h3>
                  <p className="text-muted-foreground mb-6">{newsArticles[0].excerpt}</p>
                  <Link href={`/news/${newsArticles[0].id}`}>
                    <Button className="bg-primary hover:bg-primary/90">
                      Read Full Article <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">All News</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover more stories about our medical innovations, achievements, and community impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">{article.category}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                    <Link href={`/news/${article.id}`}>
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                        Read more <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest health tips, medical news, and updates from TISU Medical
              Hub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background"
              />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
