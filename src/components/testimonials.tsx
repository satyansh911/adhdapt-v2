import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"
import { Marquee } from "@/components/magicui/marquee"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Individual with ADHD",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "ADHDapt has been a game-changer for me. For the first time, I have tools that actually work with my ADHD brain, not against it.",
    initials: "SM",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    name: "Michael R.",
    role: "Parent of a child with ADHD",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "Watching my daughter thrive using ADHDapt has brought tears to my eyes. She's more confident and doesn't feel 'broken' anymore.",
    initials: "MR",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Dr. Lisa Chen",
    role: "Therapist using ADHDapt with clients",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "I recommend ADHDapt to all my ADHD clients. The evidence-based approach makes it invaluable in our therapy sessions.",
    initials: "LC",
    rating: 5,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    name: "James K.",
    role: "Individual with ADHD",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "Finally, an app that gets it! The reminders and organization tools have helped me stay on track like never before.",
    initials: "JK",
    rating: 5,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Maria S.",
    role: "Parent of a child with ADHD",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "ADHDapt gave us the structure we needed as a family. My son is more independent and confident in managing his daily tasks.",
    initials: "MS",
    rating: 5,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    role: "Therapist using ADHDapt with clients",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "The progress tracking features help me monitor my clients' development and adjust treatment plans effectively.",
    initials: "RK",
    rating: 5,
    gradient: "from-indigo-500 to-blue-500",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 px-0 bg-transparent">
      <div className="w-[1200px]">
        {/* Header */}
        <div className="text-center mb-12 max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
              <span className="text-2xl">👥</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Community & Testimonials
            </h2>
          </div>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold italic mb-4">
            "You're Not Doing This Alone"
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Real stories from our community of individuals, families, and professionals who have found success with
            ADHDapt.
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative w-full">
          <div className="overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem] py-4">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border-0 w-96 shrink-0 overflow-hidden hover:scale-105"
                >
                  {/* Gradient Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                  />
                  <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-xl" />

                  <CardContent className="relative p-8">
                    {/* Quote Icon with Gradient */}
                    <div
                      className={`inline-flex p-3 rounded-full bg-gradient-to-r ${testimonial.gradient} mb-6 shadow-lg`}
                    >
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-base font-medium">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-full blur-sm opacity-50`}
                        />
                        <Avatar className="relative w-14 h-14 ring-2 ring-white dark:ring-gray-700">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback
                            className={`bg-gradient-to-r ${testimonial.gradient} text-white font-bold text-lg`}
                          >
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</div>
                        <div
                          className={`text-sm font-semibold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}
                        >
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-lg" />
                  </CardContent>
                </Card>
              ))}
            </Marquee>
          </div>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10" />
        </div>
      </div>
    </section>
  )
}
