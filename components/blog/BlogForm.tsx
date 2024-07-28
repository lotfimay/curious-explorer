import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "../ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "../ui/button";

import { BlogSchema } from "@/validation/schemas";

import * as z from "zod";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const BlogForm = () => {
  const handleSubmit = (values: z.infer<typeof BlogSchema>) => {
    console.log(values);
  };

  const form = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Title"
                  {...field}
                  className="border-none outline-none p-6 text-3xl focus-visible:ring-0 shadow-none text-current placeholder:text-[#b3b3b1]"
                  //disabled={isPending}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="ml-5 p-6">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="style" className="cursor-pointer">
                    Style
                  </SelectItem>
                  <SelectItem value="fashion" className="cursor-pointer">
                    Fashion
                  </SelectItem>
                  <SelectItem value="food" className="cursor-pointer">
                    Food
                  </SelectItem>
                  <SelectItem value="culture" className="cursor-pointer">
                    Culture
                  </SelectItem>
                  <SelectItem value="travel" className="cursor-pointer">
                    Travel
                  </SelectItem>
                  <SelectItem value="coding" className="cursor-pointer">
                    Coding
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <ReactQuill
                className="w-full p-6"
                theme="bubble"
                onChange={field.onChange}
                value={field.value}
                placeholder="Tell your story..."
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center">
          <Button type="submit" className="w-full bg-green-500">
            Publish
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BlogForm;
