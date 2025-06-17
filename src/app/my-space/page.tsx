"use client";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function DashboardPage() {
  const { scrollYProgress } = useScroll(); // Track page scroll

  // Map scroll progress to path lengths for 5 paths
  const pathLengths = [
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    useTransform(scrollYProgress, [0.1, 0.9], [0, 1]),
    useTransform(scrollYProgress, [0.2, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0.3, 0.7], [0, 1]),
    useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
  ];
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div
      className="flex flex-col bg-black px-4 dark:bg-black "
      style={{ minHeight: "200vh" }}
    >
      <GoogleGeminiEffect
        pathLengths={pathLengths}
        description="Track. Understand. Thrive."
      />

      {/* <h2 className="max-w-7xl pl-4 mx-500 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2> */}
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Planner",
    title: "Your brain’s external hard drive—never forget a thing.",
    src: "https://images.unsplash.com/photo-1529651737248-dad5e287768e?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Journal",
    title:
      "Your brain’s safe space! The journal catches your ideas, feelings, and wild brainstorms before they vanish.",
    src: "https://images.unsplash.com/photo-1586380951230-e6703d9f6833?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Timer",
    title:
      "A tiny drill sergeant in your pocket, making sure you don’t lose track of time",
    src: "https://plus.unsplash.com/premium_photo-1723867216795-bfaeca966acc?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Games",
    title: "Your fun-fueled focus boost!",
    src: "https://plus.unsplash.com/premium_photo-1680700015823-06aa06893ced?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Chat With Friends",
    title:
      "Your instant support squad! Whether you need a pep talk, a reality check, or just someone to share.",
    src: "https://images.unsplash.com/photo-1640244674671-f32e0f186e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Blogs",
    title: "Know more about what makes you special.",
    src: "https://plus.unsplash.com/premium_photo-1672280940910-ef13d1fd0daf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
