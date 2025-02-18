import ArticleGrid from "@/components/shared/articles-grid";
import React from "react";

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
];
const RecentPost = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-light text-textPrimary flex items-center justify-center my-[30px] lg:my-[50px]">
        <div className="h-8 w-2 bg-primary mr-2"></div>
        Recent Posts
      </h1>
      <ArticleGrid articles={articles} />
    </div>
  );
};

export default RecentPost;
