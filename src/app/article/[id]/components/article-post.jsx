import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ArticlePost() {
  const article = {
    title: "The Green Cloister: A Sanctuary of Nature and Architecture",
    author: "Alexander Pierce",
    date: "February 18, 2025, 10:15 AM",
    category: "Some category",
    image: "/assets/demo.jpg",
    content: [
      "Nestled in the heart of a bustling metropolis, the Green Cloister stands as a serene sanctuary where architecture and nature coexist in perfect harmony. Inspired by medieval monastic cloisters, this modern interpretation redefines how humans interact with their environment, offering a sustainable and tranquil escape from urban chaos.",

      "The concept of a cloister—traditionally an enclosed garden within a monastery—has been reimagined in the 21st century to serve a broader purpose. Unlike its historical counterparts, the Green Cloister is not a place of religious retreat but a communal space dedicated to ecological preservation, mental well-being, and architectural beauty. With its lush greenery, water features, and carefully curated plant life, it serves as a living, breathing structure that evolves with the seasons.",

      "Designed by a collective of eco-conscious architects and landscape designers, the Green Cloister incorporates biophilic principles to maximize the benefits of natural elements. Its walls are covered with vertical gardens, absorbing carbon dioxide and improving air quality. Solar panels and rainwater harvesting systems ensure the entire structure operates sustainably, minimizing its environmental footprint. The materials used—recycled stone, bamboo, and natural clay—reinforce the connection to the earth while maintaining durability and aesthetic appeal.",

      "Visitors to the Green Cloister find themselves enveloped in an atmosphere of peace and introspection. Stone pathways wind through fragrant herb gardens, while shaded alcoves provide seating areas for meditation or quiet study. At the center lies a reflective pond, mirroring the sky above and fostering a deep sense of connection between humanity and nature. The space is often used for yoga sessions, art exhibitions, and eco-conscious workshops, further enhancing its role as a hub for sustainability and community engagement.",

      "Beyond its immediate function as a green retreat, the Green Cloister serves as a model for future urban development. As cities continue to expand, integrating such eco-centric spaces into architectural planning can help combat the growing challenges of pollution, stress, and disconnection from nature. The success of this project has inspired similar initiatives worldwide, proving that sustainability and design excellence can indeed go hand in hand.",

      "In a time where environmental concerns are at the forefront of global discourse, the Green Cloister stands as a beacon of hope and innovation. It reminds us that the past and the future can merge gracefully, offering a vision of urban living that prioritizes both human well-being and ecological balance. Whether one visits for a moment of respite or to seek inspiration, the Green Cloister leaves an indelible mark, urging us to rethink the way we shape our built environment.",
    ],
  };
  return (
    <article className="min-h-screen  text-textPrimary">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Meta */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <span>Written by</span>
            <span className="text-primary hover:text-blue-300">
              <a href="#">{article.author}</a>
            </span>
            <span className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              {article.date}
            </span>
            <Badge variant="secondary" className="ml-2">
              {article.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Featured Image */}
        {article.image && (
          <div className="relative aspect-[16/9] mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-invert max-w-none">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
