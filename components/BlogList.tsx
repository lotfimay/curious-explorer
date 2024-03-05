import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

interface BlogProps {
  id: Number;
  user: string;
  userImg?: string;
  title: string;
  description: string;
  posted_at?: Number;
  className?: string;
}
export const Blog = ({
  title,
  user,
  userImg,
  description,
  posted_at,
  className,
}: BlogProps) => {
  return (
    <div className={`flex items-center gap-5 w-[70%] ${className}`}>
      <div className="relative rounded-md h-[200px] w-[300px]">
        <Image src="/p1.jpeg" alt="" fill className="object-cover rounded-md" />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-xl font-extrabold">{title}</h1>
          <p className="text-xs text-soft-foreground">
            posted by <span className="font-extrabold">@{user}</span>, At
            January 3rd , 2024
          </p>
        </div>
        <p className="text-soft-foreground">
          {description.substring(0, 200)} ...
        </p>
        <Button className="w-fit">Read more</Button>
      </div>
    </div>
  );
};

interface BlogListProps {
  className?: string;
  blogs: BlogProps[];
}

function BlogList({ blogs, className }: BlogListProps) {
  return (
    <ul className={`${className} flex flex-col gap-2`}>
      {blogs && blogs.map((blog) => <Blog {...blog} key={blog.id.toString()} />)}
    </ul>
  );
}

export default BlogList;
