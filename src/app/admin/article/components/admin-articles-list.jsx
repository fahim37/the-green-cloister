"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    image: "/assets/demo.jpg",
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles and pastries, is a crucial ingredient in the human diet. An increasing global population...",
  },
  {
    id: 2,
    image: "/assets/demo.jpg",
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles and pastries, is a crucial ingredient in the human diet. An increasing global population...",
  },
  {
    id: 3,
    image: "/assets/demo.jpg",
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles and pastries, is a crucial ingredient in the human diet. An increasing global population...",
  },
  {
    id: 4,
    image: "/assets/demo.jpg",
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles and pastries, is a crucial ingredient in the human diet. An increasing global population...",
  },
  {
    id: 1,
    image: "/assets/demo.jpg",
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles and pastries, is a crucial ingredient in the human diet. An increasing global population...",
  },
  {
    id: 1,
    image: "/assets/demo.jpg",
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles and pastries, is a crucial ingredient in the human diet. An increasing global population...",
  },
  {
    id: 1,
    image: "/assets/demo.jpg",
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles and pastries, is a crucial ingredient in the human diet. An increasing global population...",
  },
  {
    id: 1,
    image: "/assets/demo.jpg",
    title: "Jeremy Clarkson: Diddly Squat for the Environment?",
    excerpt:
      "Wheat, used in our daily bread, pasta, noodles and pastries, is a crucial ingredient in the human diet. An increasing global population...",
  },
];

export default function AdminArticlesList() {
  return (
    <div className="min-h-screen p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="relative overflow-hidden bg-zinc-900 text-white"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt=""
                className="h-full w-full object-cover"
              />
              <Badge className="absolute right-2 top-2 bg-blue-500 hover:bg-blue-600">
                Uncategorized
              </Badge>
            </div>
            <CardHeader className="space-y-1">
              <h3 className="line-clamp-2 text-lg font-semibold">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-sm text-zinc-400">
                {post.excerpt}
              </p>
            </CardHeader>
            <CardContent>
              <Button
                variant="link"
                className="h-auto p-0 text-blue-400 hover:text-blue-300"
              >
                Details
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <div className="flex w-full gap-2">
                <Link
                  href={`/admin/article/edit/${post.id}`}
                  className="w-1/2"
                  passHref
                >
                  <Button
                    variant="outline"
                    className="flex-1 border-primary bg-transparent text-white hover:bg-zinc-800 hover:text-white w-full"
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="flex-1 border-primary bg-transparent text-white hover:bg-zinc-800 hover:text-white"
                >
                  Delete
                </Button>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/80">
                Publish
                <Check className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
