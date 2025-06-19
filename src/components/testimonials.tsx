import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"
import { Marquee } from "@/components/magicui/marquee"
import TestimonialIcon from "./ui/icons/testimonialIcon"
import { ContainerTextFlip } from "./ui/container-text-flip"
import ContainerTextFlipDemo from "./container-text"
import StarIcon from "./ui/icons/starIcon"
import User1Icon from "./ui/icons/user1Icon"
import React from "react"
import TherapistIcon from "./ui/icons/therapistIcon"
import Parent_Icon from "./ui/icons/parent-Icon"
import User2Icon from "./ui/icons/user2Icon"
import Parent1_Icon from "./ui/icons/parentingIcon"
import Parent_one_Icon from "./ui/icons/parentingIcon"
import TherapyIcon from "./ui/icons/therapyIcon"
import QuoteIcon from "./ui/icons/quoteIcon"

const goldenGradient = "from-[#ffcc70] to-[#ffb022]";

const testimonials = [
  {
    id: 1,
    name: "Satyansh Singh",
    role: "Individual with ADHD",
    avatar: <User1Icon/>,
    quote:
      "ADHDapt has been a game-changer for me. For the first time, I have tools that actually work with my ADHD brain, not against it.",
    initials: "SS",
    rating: 5,
    gradient: goldenGradient,
  },
  {
    id: 2,
    name: "Kushagra Saxena",
    role: "Parent of a child with ADHD",
    avatar: <Parent_Icon/>,
    quote:
      "Watching my daughter thrive using ADHDapt has brought tears to my eyes. She's more confident and doesn't feel 'broken' anymore.",
    initials: "KS",
    rating: 5,
    gradient: goldenGradient,
  },
  {
    id: 3,
    name: "Harshul Anand",
    role: "Therapist using ADHDapt with clients",
    avatar: <TherapistIcon/>,
    quote:
      "I recommend ADHDapt to all my ADHD clients. The evidence-based approach makes it invaluable in our therapy sessions.",
    initials: "HA",
    rating: 5,
    gradient: goldenGradient,
  },
  {
    id: 4,
    name: "Vaibhav Pandey",
    role: "Individual with ADHD",
    avatar: <User2Icon/>,
    quote:
      "Finally, an app that gets it! The reminders and organization tools have helped me stay on track like never before.",
    initials: "VP",
    rating: 5,
    gradient: goldenGradient,
  },
  {
    id: 5,
    name: "Krish Srivastava",
    role: "Parent of a child with ADHD",
    avatar: <Parent_one_Icon/>,
    quote:
      "ADHDapt gave us the structure we needed as a family. My son is more independent and confident in managing his daily tasks.",
    initials: "KS",
    rating: 5,
    gradient: goldenGradient,
  },
  {
    id: 6,
    name: "Utkarsh Rai",
    role: "Therapist using ADHDapt with clients",
    avatar: <TherapyIcon/>,
    quote:
      "The progress tracking features help me monitor my clients' development and adjust treatment plans effectively.",
    initials: "UR",
    rating: 5,
    gradient: goldenGradient,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 px-0 bg-transparent">
      <div className="relative -top-30  0 w-[1200px]">
        <div className="text-center mb-12 max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative top-15">
                <TestimonialIcon/>
            </div>
            <div className="relative -top-10 -left-10">
                <h2 className="text-4xl md:text-4xl lg:text-6xl font-bold text-slate-900 bg-clip-text">
                    Community & Testimonials
                </h2>
            </div>
            
          </div>
          <div>
            <div className="relative -top-50 left-29 mx-auto max-w-4xl py-6 text-lg text-neutral-600 dark:text-gray-300 font-semibold mb-4">
                <ContainerTextFlipDemo/>
            </div>
          </div>
          <p className="relative -top-60 left-29.5 text-gray-600 dark:text-gray-400 text-lg max-w-3xl py-3 mx-auto leading-relaxed">
            Real stories from our community of individuals, families, and professionals who have found success with
            ADHDapt.
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative -top-75 w-full">
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
                    <div className="relative -top-5">
                        <QuoteIcon size={50}/>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="relative left-13 flex gap-1 mb-4 ">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon key={i} size={40} />
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
                            <Avatar className="relative w-14 h-14 ring-2 ring-white dark:ring-gray-700 overflow-hidden">
                            {typeof testimonial.avatar === "string" ? (
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                {React.cloneElement(testimonial.avatar, { className: "w-full h-full object-cover" })}
                                </div>
                            )}
                            </Avatar>
                        </div>

                        {/* TEXT CONTENT: LEFT-ALIGNED */}
                        <div className="flex flex-col text-left">
                            <div className="font-bold text-gray-900 dark:text-white text-lg">
                            {testimonial.name}
                            </div>
                            <div
                            className={`text-sm font-semibold text-yellow-700`}
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
