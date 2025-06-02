"use client";
import { useState, useEffect } from "react";
import { SignIn } from "@clerk/nextjs";

const slides = [
  {
    img: "https://img.freepik.com/free-vector/hand-drawn-brain-cartoon-illustration_52683-126692.jpg?semt=ais_hybrid&w=740",
    title: "Maecenas mattis egestas",
    desc: "Erdum et malesuada fames ac ante ipsum primis in faucibus suspendisse porta.",
  },
  {
    img: "https://img.freepik.com/free-vector/brain-idea-concept-illustration_114360-7416.jpg?semt=ais_hybrid&w=740",
    title: "Curabitur blandit tempus",
    desc: "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus.",
  },
  {
    img: "https://img.freepik.com/free-vector/brain-cute-cartoon-character_1308-133251.jpg?semt=ais_hybrid&w=740",
    title: "Vestibulum id ligula porta",
    desc: "Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis.",
  },
];

export default function SignInPage() {
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500); // Change slide every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Left Side - Illustration and Text */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-[#b7d2c7]">
        <div className="flex flex-col items-center">
          <img
            src={slides[current].img}
            alt="Illustration"
            className="w-96 h-96 object-contain bg-white rounded-lg mb-8"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            {slides[current].title}
          </h2>
          <p className="text-gray-700 text-center max-w-md text-lg mb-6">
            {slides[current].desc}
          </p>
          {/* Dots for carousel effect */}
          <div className="flex gap-3 mt-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full transition ${
                  idx === current ? "bg-gray-400" : "bg-gray-300 opacity-60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Right Side - Sign In */}
      <div className="flex flex-1 justify-center items-center bg-white">
        <div className="w-full max-w-md px-8 py-12">
          <div className="mb-8 text-center">
            <div className="text-3xl font-bold text-gray-700 mb-2">ADHDapt</div>
            <div className="text-xl font-bold text-gray-500">
              Welcome to ADHDapt
            </div>
          </div>
          <SignIn
            appearance={{
              elements: {
                card: "shadow-none border-none bg-transparent p-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                formFieldInput:
                  "bg-transparent border-b border-gray-300 rounded-none px-0 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 transition w-full",
                formFieldLabel: "text-gray-500 text-sm font-normal mb-1",
                socialButtonsBlockButton:
                  "bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-2 font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2 shadow-none",
                socialButtonsBlock: "mb-2",
                dividerRow: "my-2 border-gray-200",
                submitButton:
                  "bg-gray-700 text-white rounded-full px-4 py-2 font-semibold hover:bg-gray-800 transition w-full mt-4",
                submitButtonLoading:
                  "bg-gray-700 text-white rounded-full px-4 py-2 opacity-50 cursor-not-allowed",
                footer: "text-gray-500 text-center mt-8",
                formButtonReset: "text-gray-400 text-xs hover:underline",
                formFieldInputShowPasswordButton: "text-gray-400",
                formFieldInputHidePasswordButton: "text-gray-400",
                identityPreview: "text-gray-700",
                identityPreviewEditButton: "text-gray-400 hover:underline",
                formFieldAction: "text-gray-400 text-xs hover:underline",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
