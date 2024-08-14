"use client";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "../ui/button";
import { BlogSchema } from "@/validation/schemas";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FilePicker from "../FilePicker";
import DescriptionEditor from "./DescriptionEditor";
import InputField from "../InputField";
import { baseUrl } from "@/constants";
import { useToast } from "../ui/use-toast";
import { categories } from "@/constants";
import SelectionField from "../SelectionField";
import { upload } from "@/data/image-upload";
import { slugify } from "@/lib/utils";
import { findPostBySlug } from "@/data/post";

const BlogForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
    },
    mode: "onTouched",
  });

  const handleSubmit = async (values: z.infer<typeof BlogSchema>) => {
    try {
      const slug = slugify(values.title);
      const existedPost = await findPostBySlug(slug);
      if (existedPost) {
        toast({
          title: values.title,
          description: "a blog with the exact title already exists",
          variant: "destructive",
        });
        return;
      }
      const imageFile = values.image;
      const imageUrl = await upload("posts", imageFile);
      const data = {
        title: values.title,
        slug: slug,
        description: values.description,
        image: imageUrl,
        categoryTitle: values.category,
      };
      const req = await fetch(`${baseUrl}/api/posts`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const status = req.status;
      if (status === 201) {
        toast({
          title: data.title,
          description: "Your blog has been created successfully",
        });
      } else {
        toast({
          title: data.title,
          description: "Something went wrong when your blog",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        description: "Something went wrong when uploading your blog",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <InputField field={field} placeholder="Title" type="text" />
              )}
            />
          </div>
          <Button type="submit" className="rounded-full bg-green-500">
            Publish
          </Button>
        </div>

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <SelectionField
              field={field}
              options={categories}
              placeholder="Select a category"
            />
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => <FilePicker field={field} />}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => <DescriptionEditor field={field} />}
        />
      </form>
    </Form>
  );
};

export default BlogForm;
