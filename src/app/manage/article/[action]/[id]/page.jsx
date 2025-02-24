"use client";
import ArticleForm from "@/components/article/article-form";
import AdminLayout from "@/app/manage/admin-layout";
import { useParams } from "next/navigation";
import axios from "axios";

export default async function BlogPage() {
  const params = useParams();
  const slug = params.id;

  console.log("slugggggggg", slug);
  let initialData = null;

  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/blogs/${slug}`
    );
    initialData = response.data.data; // Assuming your API returns data.data
    console.log(initialData);
  } catch (error) {
    console.error("Error fetching blog data:", error);
    // Handle error appropriately (e.g., show an error message)
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>
        {/* <ArticleForm mode="edit" initialData={initialData} /> */}
      </div>
    </AdminLayout>
  );
}
