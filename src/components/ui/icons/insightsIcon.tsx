"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { LucideProps } from "lucide-react";
import React from "react";

interface Props extends LucideProps {
  size?: number;
  isActive?: boolean;
}

const InsightsIcon: React.FC<Props> = ({ size = 30 }) => {
  return (
    <Player
      autoplay
      loop
      src="/insights.json"
      style={{ height: size, width: size }}
    />
  );
};

export default InsightsIcon;