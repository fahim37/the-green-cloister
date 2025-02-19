"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Loader2, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { z } from "zod";

const categories = [
  { id: "1", name: "Technology" },
  { id: "2", name: "Travel" },
  { id: "3", name: "Food" },
  { id: "4", name: "Lifestyle" },
];

const blogFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Blog description is required"),
  category: z.string().min(1, "Category is required"),
  authorName: z.string().min(1, "Author name is required"),
  referenceUrl: z.string().url().optional().or(z.literal("")),
  date: z.date(),
  banner: z.string().min(1, "Blog banner is required"),
});

export default function ArticleForm({ mode, initialData }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(blogFormSchema),
    defaultValues: initialData || {
      title: "",
      description: "",
      category: "",
      authorName: "",
      referenceUrl: "",
      date: new Date(),
      banner: "",
    },
  });

  // .toISOString().split("T")[0]

  async function onSubmit(data) {
    setIsLoading(true);
    try {
      // Here you would typically make an API call to save/update the blog
      const endpoint =
        mode === "add" ? "/api/blogs" : `/api/blogs/${initialData?.id}`;
      const method = mode === "add" ? "POST" : "PUT";

      await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      router.push("/blog");
      router.refresh();
    } catch (error) {
      console.error("Error saving blog:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      // Here you would typically upload the image to your storage service
      // and get back a URL
      const formData = new FormData();
      formData.append("file", file);

      // Simulated upload - replace with your actual upload logic
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData,
      // })
      // const { url } = await response.json()

      // For now, we'll use a placeholder URL
      const url = URL.createObjectURL(file);
      form.setValue("banner", url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="banner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog Banner</FormLabel>
              <FormControl>
                <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 h-[200px] bg-muted">
                  {field.value ? (
                    <div className="relative w-full h-full">
                      <img
                        src={field.value || "/placeholder.svg"}
                        alt="Blog banner"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => form.setValue("banner", "")}
                      >
                        Change
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-primary hover:text-primary/80"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter blog title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blog Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type description here"
                  className="resize-none h-[300px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="authorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter author name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="referenceUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reference URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        field.value.toLocaleDateString()
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {mode === "add" ? "Create Blog" : "Update Blog"}
        </Button>
      </form>
    </Form>
  );
}
