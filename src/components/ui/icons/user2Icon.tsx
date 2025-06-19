"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { LucideProps } from "lucide-react";
import React from "react";

interface Props extends LucideProps {
  size?: number;
  isActive?: boolean;
}

const User2Icon: React.FC<Props> = ({ size = 120 }) => {
  return (
    <Player
      autoplay
      loop
      src="/user2.json"
      style={{ height: size, width: size }}
    />
  );
};

export default User2Icon;