import React from "react";
import BlogList from "./BlogList";

interface RecentBlogsProps {
  page: number;
  category?: string;
  className?: string;
}

const RecentBlogs = ({ page, category, className }: RecentBlogsProps) => {
  return (
    <div className={`${className}`}>
      <h1 className="text-3xl my-2">Recent publications</h1>
      <BlogList page={page} category={category} />
    </div>
  );
};

export default RecentBlogs;
