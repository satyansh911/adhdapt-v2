"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { LucideProps } from "lucide-react";
import React from "react";

interface Props extends LucideProps {
  size?: number;
  isActive?: boolean;
}

const LockIcon: React.FC<Props> = ({ size = 35 }) => {
  return (
    <Player
      autoplay
      loop
      src="/lock.json"
      style={{ height: size, width: size }}
    />
  );
};

export default LockIcon;