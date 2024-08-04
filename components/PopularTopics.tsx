import React from "react";
import { db } from "@/lib/db";

import moment from "moment";
import { categoryColors } from "@/constants";
const getPopularTopics = async () => {
  try {
    const blogs = await db.post.findMany({
      take: 3,
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        views: "desc",
      },
    });
    return blogs;
  } catch (error) {
    console.log(error);
  }
};

interface TopicProps {
  id: string;
  title: string;
  category: string;
  user: string;
  date: Date;
  className?: string;
}

const Topic = ({ id, category, title, user, date, className }: TopicProps) => {
  const bgColor = categoryColors[category.toLocaleLowerCase()];
  return (
    <div className={`${className}`}>
      <div>
        <span
          className={`text-white rounded-lg p-1 text-sm`}
          style={{ backgroundColor: bgColor }}
        >
          {category}
        </span>
        <h1 className="text-lg text-soft-foreground">{title}</h1>
      </div>
      <div className="flex flex-col text-xs text-soft-foreground">
        <span>{user}</span>
        <span>{moment(date).format("MMMM Do YYYY, h:mm a")}</span>
      </div>
    </div>
  );
};

interface PopularTopicsProps {
  className?: string;
}

const PopularTopics = async ({ className }: PopularTopicsProps) => {
  const topics = await getPopularTopics();

  return (
    <div className={`max-w-[400px] ${className}`}>
      <div>
        <span className="text-sm text-soft-foreground">What's hot</span>
        <h1 className="font-extrabold text-lg">Most Pouplar</h1>
      </div>
      {topics && (
        <ul className="flex flex-col mt-8 gap-6">
          {topics.map((topic) => (
            <li key={topic.id}>
              <Topic
                key={topic.id}
                id={topic.id}
                title={topic.title}
                category={topic.categoryTitle}
                user={topic.user.name || ""}
                date={topic.posted_at}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PopularTopics;
