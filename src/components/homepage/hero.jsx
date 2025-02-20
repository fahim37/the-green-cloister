"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useAnimation, motion } from "framer-motion";
import StatsBar from "./stats-bar";
import { MagicCard } from "../magicui/magic-card";

export default function Hero() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({ x: 5 });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({ x: 0 });
  };

  return (
    <div className="relative h-[900px] mt-[-64px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/homepage/hero.png')] bg-cover bg-center " />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full  w-[97%] mx-auto md:w-auto">
        <div className="container">
          <MagicCard
            className="
          max-w-[1050px] max-h-[440px] flex-col items-center"
            gradientColor="#00800066"
          >
            <div className="bg-white h-full w-full scale-x-[99%] scale-y-[98%] py-6 px-3 lg:py-14 lg:px-14 rounded-lg translate-y-[-0.5px]">
              <div className="space-y-4 ">
                <h2 className="text-[#96B28D] text-lg md:text-2xl font-normal">
                  {"Eton College's student-run environmental publication"}
                </h2>
                <h1 className="text-[30px] md:text-[45px] font-bold leading-tight">
                  Stay Informed on the{" "}
                  <span className="text-primary">Environment</span>
                  <br />
                  <span className="text-primary">from Solutions</span> to Urgent
                  Challenges
                </h1>
                <blockquote className="text-[15px] md:text-[20px] mt-6 italic text-gray-600 max-w-[600px]">
                  {
                    '"I\'m sure things are going to get worse before they get better.\nBut I believe they can get better."'
                  }
                </blockquote>
              </div>
              <div>
                <Link href="/article/123">
                  <Button
                    className="bg-primary text-white hover:bg-primary/90 text-lg px-6 py-6 h-[52px] rounded-md mt-6"
                    onMouseEnter={handleHoverStart}
                    onMouseLeave={handleHoverEnd}
                  >
                    <span>Read Latest Article</span>
                    <motion.div
                      className="inline-block ml-2"
                      animate={controls}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </Link>
              </div>
            </div>
          </MagicCard>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-[770px] mx-auto mt-[-70px]">
        <StatsBar />
      </div>
    </div>
  );
}
