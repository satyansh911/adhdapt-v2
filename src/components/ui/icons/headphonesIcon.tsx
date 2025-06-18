"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { LucideProps } from "lucide-react";
import React from "react";

interface Props extends LucideProps {
  size?: number;
  isActive?: boolean;
}

const HeadphonesIcon: React.FC<Props> = ({ size = 45     }) => {
  return (
    <Player
      autoplay
      loop
      src="/headphones.json"
      style={{ height: size, width: size }}
    />
  );
};

export default HeadphonesIcon;