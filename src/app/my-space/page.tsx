"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Spline from "@splinetool/react-spline";

export default function DashboardPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) return null;

  return (
    <div className="min-h-screen bg-black p-6 flex items-center">
      <div className="w-full ">
        <Spline scene="https://prod.spline.design/NEOgEktF87ReCehV/scene.splinecode" />
      </div>
    </div>
  );
}
