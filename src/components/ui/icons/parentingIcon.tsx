"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { LucideProps } from "lucide-react";
import React from "react";

interface Props extends LucideProps {
  size?: number;
  isActive?: boolean;
}

const Parent_one_Icon: React.FC<Props> = ({ size = 60 }) => {
  return (
    <Player
      autoplay
      loop
      src="/parent1-icon.json"
      style={{ height: size, width: size }}
    />
  );
};

export default Parent_one_Icon;