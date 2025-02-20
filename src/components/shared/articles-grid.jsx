import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const ArticleGrid = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <article
          key={article.slug}
          className="relative flex h-[670px] w-full flex-col"
        >
          <Link href={`/article/${article.slug}`} className="block">
            <div className="relative h-[450px] rounded-lg overflow-hidden border-2 border-primary">
              {article.category && (
                <Badge
                  variant="secondary"
                  className="absolute right-3 top-3 z-10 rounded-[6px] bg-primary px-2 py-1 text-[11px] font-normal text-white hover:bg-primary/80"
                >
                  {article.category}
                </Badge>
              )}
              <Image
                src={article.imageUrl || "/assets/homepage/demo-card.jpg"}
                alt={article.title}
                height={450}
                width={370}
                className="object-cover h-full w-full transition-all hover:scale-105"
                priority
              />
            </div>
          </Link>
          <div className="flex flex-1 flex-col pt-5">
            <Link
              href={`/article/${article.slug}`}
              className="group relative block w-fit"
            >
              <h2
                className="mb-3 text-[18px] lg:text-[24px] font-semibold leading-tight text-textPrimary hover:text-primary relative
                 transition-all duration-300 "
              >
                {article.title}
              </h2>
            </Link>

            <p className="line-clamp-3 text-sm leading-snug text-textPrimary">
              {article.excerpt}
            </p>
            <div className="mt-3">
              <Link href={`/article/${article.slug}`}>
                <Button variant="outline" className="text-[16px]">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleGrid;
