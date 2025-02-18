"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import HomePageHeading from "../shared/homepage-heading";
import ArticleGrid from "../shared/articles-grid";
const articles = [
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles and pastries, is a crucial ingredient in the human diet. An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eCyJVMzSlKqHKICZ2NIptu6ciUpMTv.png",
    slug: "jeremy-clarkson-environment",
  },
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles andpastries, is a crucial ingredient in the human diet.An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eCyJVMzSlKqHKICZ2NIptu6ciUpMTv.png",
    slug: "jeremy-clarkson-environment-2",
  },
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles andpastries, is a crucial ingredient in the human diet.An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eCyJVMzSlKqHKICZ2NIptu6ciUpMTv.png",
    slug: "jeremy-clarkson-environment-3",
  },
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles andpastries, is a crucial ingredient in the human diet.An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eCyJVMzSlKqHKICZ2NIptu6ciUpMTv.png",
    slug: "jeremy-clarkson-environment-4",
  },
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles andpastries, is a crucial ingredient in the human diet.An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eCyJVMzSlKqHKICZ2NIptu6ciUpMTv.png",
    slug: "jeremy-clarkson-environment-5",
  },
  {
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles andpastries, is a crucial ingredient in the human diet.An increasing global population...",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eCyJVMzSlKqHKICZ2NIptu6ciUpMTv.png",
    slug: "jeremy-clarkson-environment-6",
  },
];

export default function ArchiveArticles() {
  return (
    <div className="container px-4 py-12">
      <div className="flex justify-between items-center">
        <div />
        <div className="translate-x-[55px]">
          <HomePageHeading text={"Archives"} />
        </div>
        <Link href="/all" className="mb-7 md:mb-10 ">
          <Button
            variant="custom"
            className=" text-primary underline hover:text-primary/80 text-[16px]"
          >
            See more
          </Button>
        </Link>
      </div>
      <ArticleGrid articles={articles} />
    </div>
  );
}
