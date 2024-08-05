import React from "react";
import Pagination from "./Pagination";
import { POST_PER_PAGE } from "@/app/api/posts/route";
import { Blog } from "./Blog";
import { db } from "@/lib/db";

const getBlogs = async (page: number, cat?: string) => {
  cat = cat || "";
  page = page || 1;
  try {
    const query = {
      take: POST_PER_PAGE,
      skip: (page - 1) * POST_PER_PAGE,
      where: {
        ...(cat && { categoryTitle: cat }),
      },
      include: {
        user: {
          select: {
            id: true,
            image: true,
            name: true,
          },
        },
      },
    };
    const [posts, count] = await db.$transaction([
      db.post.findMany({
        ...query,
        orderBy: {
          posted_at: "desc",
        },
      }),
      db.post.count({ where: query.where }),
    ]);
    return { posts, count };
  } catch (error) {
    console.log("Somethin went wrong");
  }
};

interface BlogListProps {
  className?: string;
  page: number;
  category?: string;
}

async function BlogList({ page, category, className }: BlogListProps) {
  const data = await getBlogs(page, category);

  const posts = data?.posts || [];
  const count = data?.count || 0;

  const hasNext = Number(page) * POST_PER_PAGE < count;
  const hasPrevious = Number(page) > 1;
  return (
    <div className={`${className}`}>
      <Pagination hasNext={hasNext} hasPrevious={hasPrevious} page={page}>
        <ul className={`flex flex-col gap-2`}>
          {posts &&
            posts.map((blog: any) => (
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
