"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/lib/firebase";

import { Button } from "../ui/button";

import { BlogSchema } from "@/validation/schemas";

import * as z from "zod";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const BlogForm = () => {
  const [open, setOpen] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = (values: z.infer<typeof BlogSchema>) => {
    if (imageFile) {
      console.log(imageFile);
    }
    console.log(values);
  };

  useEffect(() => {
    if (imageFile) {
      setImagePreview(URL.createObjectURL(imageFile));
    } else {
      setImagePreview(null);
    }
  }, [imageFile]);

  const form = useForm<z.infer<typeof BlogSchema>>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      image: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
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
                  {<FormMessage className="ml-6 text-red-500" />}
                </FormItem>
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
              {<FormMessage className="ml-6 text-red-500" />}
            </FormItem>
          )}
        />
        <div className="flex gap-5 relative">
          <button
            className="w-9 h-9 rounded-full bg-transparent border border-current flex items-center justify-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <Image src="/add.png" alt="" width={16} height={16} />
          </button>
          {open && (
            <div className="flex gap-5 bg-[var(--bg)] absolute z-999 left-12">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        className="hidden"
                        id="image"
                        type="file"
                        onChange={(e) => {
                          if (e.target.files) {
                            setImageFile(e.target.files[0]);
                          }
                        }}
                        //disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage className="ml-6" />
                  </FormItem>
                )}
              />
              <Label
                htmlFor="image"
                className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer"
              >
                <Image src="/image.png" alt="" width={16} height={16} />
              </Label>
              <button className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
                <Image src="/external.png" alt="" width={16} height={16} />
              </button>
              <button className="w-9 h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
                <Image src="/video.png" alt="" width={16} height={16} />
              </button>
            </div>
          )}
        </div>
        {imagePreview && (
          <div className="w-fit relative">
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-0 right-0 bg-transparent p-1 z-10"
            >
              <Image src="/remove.png" alt="Remove" width={32} height={32} />
            </button>
            <img
              src={imagePreview}
              alt="Image Preview"
              className="h-64 w-64 object-contain"
            />
          </div>
        )}
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
              {<FormMessage className="ml-6 text-red-500" />}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default BlogForm;
