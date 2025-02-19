"use client";
import ArticleGrid from "@/components/shared/articles-grid";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const dummyArticles = [
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

const ArticleList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = dummyArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(dummyArticles.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="text-4xl font-light text-textPrimary flex items-center justify-center mb-[30px] md:mb-[50px] mt-[70px] md:mt-[100px]">
        <div className="h-8 w-2 bg-primary mr-2 "></div>
        Who are we?
      </h1>
      <ArticleGrid articles={currentArticles} />
      <div className="mt-8 flex justify-center items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-primary text-textPrimary rounded disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 border rounded ${
              currentPage === page
                ? "bg-primary text-textPrimary"
                : "text-textPrimary"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-primary text-textPrimary rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ArticleList;
