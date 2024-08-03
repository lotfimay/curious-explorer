import Link from "next/link";
import React from "react";

import Image from "next/image";

import { db } from "@/lib/db";
import { categoryColors } from "@/constants";

const fetchCategories = async () => {
  try {
    const categories = await db.category.findMany();
    return categories;
  } catch (error) {
    console.log("Something went wrong !");
  }
};

interface CategoRyItemProps {
  title: string;
  image: string;
  bgColor?: string;
}

const CategoryItem = ({ title, image }: CategoRyItemProps) => {
  const bgColor = categoryColors[title.toLowerCase()] || "#ff795736";
  return (
    <Link
      href={`/?page=1&cat=${title}`}
      className={`flex-1 flex items-center justify-center bg-[${bgColor}] rounded-md gap-1 py-2 px-1`}
      style={{ backgroundColor: bgColor }}
      scroll={false}
    >
      <div className="relative w-[32px] h-[32px]">
        <Image src={image} alt="" fill className="object-cover rounded-full" />
      </div>
      <span>{title}</span>
    </Link>
  );
};

async function Categories({ className }: { className?: string }) {
  const categories = await fetchCategories();

  return (
    <div className={`${className}`}>
      <h1 className="text-xl font-extarbold">Popular Categoies</h1>
      <div className="mt-2 flex items-center justify-between  gap-4">
        {categories?.map((category) => {
          return (
            <CategoryItem
              key={category.title}
              title={category.title}
              image={category.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
