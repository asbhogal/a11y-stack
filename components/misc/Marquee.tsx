"use client";

import { motion as m } from "framer-motion";

interface MarqueeProps {
  images: string[];
}

export default function Marquee({ images }: MarqueeProps) {
  const marqueeVariants = {
    animate: {
      y: ["100%", "-100%"],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div style={{ overflow: "hidden", height: "100%" }}>
      <div
        className="marquee"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {images.map((image, index) => (
          <m.img
            key={index}
            src={image}
            alt=""
            style={{ display: "block", width: "100%", height: "100%" }}
            variants={marqueeVariants}
            animate="animate"
          />
        ))}
      </div>
    </div>
  );
}
