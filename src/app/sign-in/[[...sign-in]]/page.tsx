"use client";

import { useState, useEffect } from "react";
import { SignIn } from "@clerk/nextjs";

const slides = [
  {
    img: "https://img.freepik.com/free-vector/hand-drawn-brain-cartoon-illustration_52683-126692.jpg?semt=ais_hybrid&w=740",
    title: "Boost Focus Naturally",
    desc: "Transform attention challenges into strengths with ADHDapt.",
  },
  {
    img: "https://img.freepik.com/free-vector/brain-idea-concept-illustration_114360-7416.jpg?semt=ais_hybrid&w=740",
    title: "Personalized Learning",
    desc: "Tailored strategies designed to align with your cognitive strengths.",
  },
  {
    img: "https://img.freepik.com/free-vector/brain-cute-cartoon-character_1308-133251.jpg?semt=ais_hybrid&w=740",
    title: "Gamified Experience",
    desc: "Fun, reward-based modules to keep you motivated and on track.",
  },
];

export default function SignInPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-[#111] to-[#1a1a1a] text-white">
      {/* Carousel Section */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 px-10">
        <div className="text-center max-w-md">
          <div className="p-6 bg-white/5 rounded-xl shadow-md backdrop-blur-md border border-white/10 mb-6">
            <img
              src={slides[current].img}
              alt="Slide image"
              className="w-64 h-64 object-cover rounded-lg mx-auto"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2">{slides[current].title}</h2>
          <p className="text-lg text-gray-300">{slides[current].desc}</p>
          <div className="flex gap-2 mt-4 justify-center">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === current ? "bg-white" : "bg-gray-500"
                } transition-all`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sign-In Section */}
      <div className="flex flex-1 justify-center items-center px-6">
        <div className="w-full max-w-md bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">ADHDapt</h1>
            <p className="text-md text-gray-400">Track, Understand, Thrive</p>
          </div>

          <SignIn
            appearance={{
              variables: {
                colorPrimary: "#ffffff",
                colorBackground: "#232023",
                colorText: "#ffffff",
                colorTextSecondary: "#ffffff",
                colorInputText: "#f4f4f5",
                colorInputBackground: "#000000",
              },
              elements: {
                card: "bg-transparent border-none shadow-none p-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton:
                  "bg-black text-white font-medium rounded-full px-4 py-2 hover:bg-gray-800 transition w-full",

                socialButtonsBlock: "mb-4",
                dividerRow: "my-4 border-gray-700",
                formFieldLabel: "text-gray-400 text-sm mb-1",
                formFieldInput:
                  "bg-[#1f1f1f] text-white placeholder-gray-400 border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-white",
                formFieldInputShowPasswordButton: "text-gray-400",
                formFieldInputHidePasswordButton: "text-gray-400",
                submitButton:
                  "bg-black text-white rounded-md px-4 py-2 font-semibold hover:bg-black w-full mt-4",
                submitButtonLoading:
                  "bg-black text-black opacity-50 cursor-not-allowed",
                footer: "text-gray-500 text-center mt-6 text-sm",
                formFieldAction: "text-gray-400 text-xs hover:underline",
                formButtonReset: "text-gray-400 text-xs hover:underline",
                identityPreview: "text-white",
                identityPreviewEditButton: "text-gray-300 hover:underline",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
