import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const newsArticles = [
  {
    id: 1,
    title: "New Cardiology Department Opens with State-of-the-Art Equipment",
    excerpt:
      "TISU Medical Hub expands its services with a cutting-edge cardiology department featuring the latest diagnostic and treatment equipment, bringing world-class cardiac care to Uzbekistan.",
    content: `TISU Medical Hub is proud to announce the opening of our new Cardiology Department, equipped with state-of-the-art medical technology and staffed by internationally trained cardiologists.

The new department features advanced cardiac catheterization labs, 3D echocardiography systems, and the latest in cardiac monitoring technology. This expansion represents our commitment to providing comprehensive cardiovascular care to our patients.

Dr. Aliyeva Munira, our lead cardiologist with 10 years of experience, will head the department. "This new facility allows us to provide the highest level of cardiac care without patients having to travel abroad," she stated.

The department offers services including cardiac catheterization, angioplasty, pacemaker implantation, and comprehensive cardiac rehabilitation programs.

Key features of the new Cardiology Department include:

• Advanced cardiac catheterization laboratories with digital imaging
• 3D echocardiography systems for detailed heart imaging  
• Stress testing facilities for comprehensive cardiac evaluation
• Cardiac rehabilitation center with specialized exercise equipment
• 24/7 cardiac monitoring and emergency response capabilities

The investment in this new department reflects TISU Medical Hub's commitment to bringing world-class healthcare to Uzbekistan. Patients no longer need to travel abroad for advanced cardiac procedures, as our facility now offers the same level of care available in leading international medical centers.

The department is staffed by cardiologists who have trained at prestigious institutions worldwide and bring decades of combined experience in treating complex cardiac conditions. Our team is equipped to handle everything from routine cardiac screenings to complex surgical interventions.

We are proud to offer this enhanced level of cardiac care to our community and look forward to helping our patients achieve better heart health outcomes.`,
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
  // Add other articles here...
]

interface NewsArticlePageProps {
  params: {
    id: string
  }
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  const article = newsArticles.find((article) => article.id === Number.parseInt(params.id))

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Article Header */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link href="/news">
              <Button variant="ghost" className="mb-8 p-0 h-auto text-primary hover:text-primary/80">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to News
              </Button>
            </Link>

            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">{article.category}</span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6">{article.title}</h1>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-6 text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Published by {article.author}</p>
                  <p className="text-sm text-muted-foreground">{new Date(article.date).toLocaleDateString()}</p>
                </div>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsArticles
                .filter((a) => a.id !== article.id)
                .slice(0, 2)
                .map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`/news/${relatedArticle.id}`}>
                    <div className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(relatedArticle.date).toLocaleDateString()}</span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold mb-2 line-clamp-2">{relatedArticle.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{relatedArticle.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
