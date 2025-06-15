"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { LucideProps } from "lucide-react";
import React from "react";

interface Props extends LucideProps {
  size?: number;
  isActive?: boolean;
}

const GlobeIcon: React.FC<Props> = ({ size = 24 }) => {
  return (
    <Player
      autoplay
      loop
      src="/globe.json"
      style={{ height: size, width: size }}
    />
  );
};

export default GlobeIcon;
