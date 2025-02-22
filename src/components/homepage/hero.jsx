"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useAnimation, motion } from "framer-motion";
import StatsBar from "./stats-bar";
import { MagicCard } from "../magicui/magic-card";
import StaggeredText from "../animation/staggered-text";
import FadeB from "../animation/fadeB";
import Image from "next/image";
import FadeR from "../animation/fadeR";

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
    <div className="relative h-[800px] mt-[-64px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/homepage/hero.png')] bg-cover bg-center" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full  w-[97%] mx-auto md:w-auto">
        <div className="container">
          <MagicCard
            className="
          max-w-[1050px] max-h-[440px] flex-col items-center"
            gradientColor="#00800066"
          >
            <div className="bg-white h-full w-full scale-x-[99%] scale-y-[97.5%] py-6 px-3 lg:py-14 lg:px-14 rounded-lg translate-y-[-0.5px]">
              <div className="space-y-4 ">
                <FadeR className="flex gap-3">
                  <Image
                    src="/assets/logo.png"
                    width={500}
                    height={500}
                    alt="Logo"
                  />
                </FadeR>
                <StaggeredText
                  text="Student-run environmental publication, with roots at Winchester College"
                  delay={0.2}
                  className={"text-[#8db87f] text-md md:text-2xl font-normal"}
                  asWords={"true"}
                />

                <StaggeredText
                  text={`"What you do makes a difference, and you have to decide
what kind of difference you want to make."`}
                  delay={0.6}
                  className="text-[15px] md:text-[20px] mt-6 italic text-gray-600 max-w-[800px]"
                  asWords={true} // or false for letter-by-letter animation
                />
                <StaggeredText
                  text={"Jane Goodall"}
                  delay={1.2}
                  className="text-[10px] md:text-[16px] mt-6 text-gray-600 max-w-[800px]"
                  asWords={true} // or false for letter-by-letter animation
                />
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
      <FadeB className="max-w-[770px] mx-auto mt-[-70px]">
        <StatsBar />
      </FadeB>
    </div>
  );
}
