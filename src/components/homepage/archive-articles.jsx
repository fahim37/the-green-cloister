"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import HomePageHeading from "../shared/homepage-heading";
import ArticleGrid from "../shared/articles-grid";

export default function ArchiveArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/blogs", {
          params: { limit: 6 },
        });
        setArticles(response.data.data); // Fix: Access 'data' instead of 'blogs'
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container px-4 py-12">
      <div className="flex justify-between items-center">
        <div />
        <div className="translate-x-[55px]">
          <HomePageHeading text={"Archives"} />
        </div>
        <Link href="/article" className="mb-7 md:mb-10">
          <Button
            variant="custom"
            className="text-primary underline hover:text-primary/80 text-[16px]"
          >
            See more
          </Button>
        </Link>
      </div>
      {loading ? (
        <p className="text-center text-gray-500">Loading articles...</p>
      ) : (
        <ArticleGrid articles={articles} />
      )}
    </div>
  );
}
