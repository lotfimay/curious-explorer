import React from "react";

import { baseUrl } from "@/constants";
import Pagination from "./Pagination";
import { POST_PER_PAGE } from "@/app/api/posts/route";
import { Blog } from "./Blog";

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
