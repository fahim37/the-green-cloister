import ArticleForm from "@/components/article/article-form";
import AdminLayout from "@/app/manage/admin-layout";

const blog = {
  title: "The Green Cloister: A Sanctuary of Nature and Architecture",
  description: [
    "Nestled in umans interact with their environment, offering a sustainable and tranquil escape from urban chaos.",
    "The concept of reenery, water features, and carefully curated plant life, it serves as a living, breathing structure that evolves with the seasons.",
    "Designed by a collectppeal.",
    "Visitors to the Green nature. The space is often used for yoga sessions, art exhibitions, and eco-conscious workshops, further enhancing its role as a hub for sustainability and community engagement.",
    "Beyond its immediate functioject has inspired similar initiatives worldwide, proving that sustainability and design excellence can indeed go hand in hand.",
    "In a time where.",
  ],
  category: "Some category",
  authorName: "Alexander Pierce",
  referenceUrl: "",
  date: new Date("February 18, 2025, 10:15 AM"),
  banner: "/assets/demo.jpg",
};

export default async function BlogPage({ params }) {
  //   if (params.action !== "edit") {
  //     notFound()
  //   }

  //   const blog = await getBlogById(params.id);

  //   if (!blog) {
  //     return "no blog";
  //   }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>
        <ArticleForm mode="edit" initialData={blog} />
      </div>
    </AdminLayout>
  );
}
