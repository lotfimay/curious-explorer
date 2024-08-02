import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { baseUrl } from "@/constants";
import moment from "moment";
import Pagination from "./Pagination";
import { POST_PER_PAGE } from "@/app/api/posts/route";

const getBlogs = async (page: number, cat?: string) => {
  try {
    const response = await fetch(
      `${baseUrl}/api/posts?page=${page}&cat=${cat || ""}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return Error("Something went wrong");
  }
};

interface User {
  id: string;
  name: String;
  image?: string;
}

interface BlogProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  posted_at?: Date;
  user: User;
  className?: string;
}
export const Blog = ({
  id,
  title,
  description,
  category,
  image,
  user,
  posted_at,
  className,
}: BlogProps) => {
  return (
    <li className={`w-full flex items-center gap-5 ${className}`} key={id}>
      <div className="relative h-[200px] min-w-[250px]">
        <Image src="/p1.jpeg" alt="" fill className="object-cover" />
      </div>
      <div className="max-w-[500px] flex flex-col gap-2">
        <div>
          <h1 className="text-xl font-extrabold">{title}</h1>
          <h2>{category}</h2>
          <p className="text-xs text-soft-foreground">
            posted by <span className="font-extrabold">@{user.name}</span>, At{" "}
            {moment(posted_at).format("MMMM Do YYYY, h:mm a")}
          </p>
        </div>
        <p className="text-soft-foreground">
          {description.substring(0, 200)} ...
        </p>
        <Button variant="link" className="p-0 w-fit">
          Read more
        </Button>
      </div>
    </li>
  );
};

interface BlogListProps {
  className?: string;
  page: number;
  category?: string;
}

async function BlogList({ page, category, className }: BlogListProps) {
  const { posts: blogs, count } = await getBlogs(page, category);

  const hasNext = Number(page) * POST_PER_PAGE < count;
  const hasPrevious = Number(page) > 1;
  return (
    <div className={`${className}`}>
      <Pagination hasNext={hasNext} hasPrevious={hasPrevious} page={page}>
        <ul className={`flex flex-col gap-2`}>
          {blogs &&
            blogs.map((blog: any) => (
              <Blog
                id={blog.id}
                title={blog.title}
                description={blog.description}
                category={blog.categoryTitle}
                user={blog.user}
                posted_at={blog.posted_at}
                key={blog.id}
              />
            ))}
        </ul>
      </Pagination>
    </div>
  );
}

export default BlogList;
