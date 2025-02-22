"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeB from "../animation/fadeB";

const articles = [
  {
    title: "Jeremy Clarkson: DiddlySquat for the Environment?",
    date: "November 22, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2046-Fb99oY6U6Zxby0kNgIQgpCe1QutO4I.png",
  },
  {
    title: "Ecotourism –The Future of Tourism",
    date: "May 19, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2046-Fb99oY6U6Zxby0kNgIQgpCe1QutO4I.png",
  },
  {
    title: "Why NuclearPower Hasn'tTaken Over theEnergy...",
    date: "November 24, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2046-Fb99oY6U6Zxby0kNgIQgpCe1QutO4I.png",
  },
  {
    title: "Jeremy Clarkson: DiddlySquat for the Environment?",
    date: "November 22, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2046-Fb99oY6U6Zxby0kNgIQgpCe1QutO4I.png",
  },
  {
    title: "Ecotourism –The Future of Tourism",
    date: "May 19, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2046-Fb99oY6U6Zxby0kNgIQgpCe1QutO4I.png",
  },
  {
    title: "Why NuclearPower Hasn'tTaken Over theEnergy...",
    date: "November 24, 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2046-Fb99oY6U6Zxby0kNgIQgpCe1QutO4I.png",
  },
];

export default function PopularCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="container mt-[200px] mb-[100px]">
      <div>
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-2 h-8 bg-primary"></div>
          <h2 className="text-textPrimary text-[24px] md:text-[36px] font-semibold">
            POPULAR THIS WEEK
          </h2>
        </div>
        <FadeB>
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              // slidesToScroll: 3,
            }}
          >
            <CarouselContent>
              {articles.map((article, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card
                    className="overflow-hidden border-none rounded-lg bg-transparent select-none
"
                  >
                    <Link href={"/article/123"}>
                      <div className="border-2 border-primary">
                        <Image
                          src={"/assets/homepage/carousel.jpg"}
                          alt={article.title}
                          width={370}
                          height={330}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </Link>

                    <div className="bg-transparent">
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" /> */}
                      <div className="">
                        <Link href={"/article/123"}>
                          <h3 className="text-textPrimary hover:text-primary font-semibold mb-2 text-[18px] lg:text-[24px] pt-4">
                            {article.title}
                          </h3>
                        </Link>
                        <p className="text-textPrimary text-sm">
                          {article.date}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </FadeB>
        <div className="flex justify-center gap-2 mt-4">
          {articles.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                current === index ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
