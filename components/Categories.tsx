import Link from "next/link";
import React from "react";

import Image from "next/image";

interface CategoRyItemProps {
  title: string;
  image: string;
  bgColor?: string;
}

const CategoryItem = ({ title, image, bgColor }: CategoRyItemProps) => {
  return (
    <Link
      href="/"
      className={`flex-1 flex items-center justify-center rounded-md gap-1 py-2 px-1`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative w-[32px] h-[32px]">
        <Image src={image} alt="" fill className="object-cover rounded-full" />
      </div>
      <span>{title}</span>
    </Link>
  );
};

function Categories({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <h1 className="text-xl font-extarbold">Popular Categoies</h1>
      <div className="mt-2 flex items-center justify-between  gap-4">
        <CategoryItem title="Coding" image="/coding.png" bgColor="#5e4fff31" />
        <CategoryItem
          title="Fashion"
          image="/fashion.png"
          bgColor="#da85c731"
        />
        <CategoryItem title="Food" image="/food.png" bgColor="#7fb88133" />
        <CategoryItem title="Style" image="/style.png" bgColor="#57c4ff31" />
        <CategoryItem title="Travel" image="/travel.png" bgColor="#ff795736" />
        <CategoryItem
          title="Culture"
          image="/culture.png"
          bgColor="#ffb04f45"
        />
        {/**
         .category.style {
  background-color: #57c4ff31;
}

.category.fashion {
  background-color: #da85c731;
}

.category.food {
  background-color: #7fb88133;
}

.category.travel {
  background-color: #ff795736;
}

.category.culture {
  background-color: #ffb04f45;
}

.category.coding {
  background-color: #5e4fff31;
}

         */}
      </div>
    </div>
  );
}

export default Categories;
