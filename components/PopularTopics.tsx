import React from "react";

interface TopicProps {
  id: number;
  className?: string;
  category: string;
  title: string;
  user: string;
  date?: string;
}

const Topic = ({ id, category, title, user, date, className }: TopicProps) => {
  return (
    <div className={`${className}`}>
      <div>
        <span className={`bg-purple-300 text-white rounded-lg p-1 text-sm`}>
          {category}
        </span>
        <h1 className="text-lg text-soft-foreground">{title}</h1>
      </div>
      <div className="flex flex-col text-xs text-soft-foreground">
        <span>{user}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

interface PopularTopicsProps {
  topics: TopicProps[];
  className?: string;
}

function PopularTopics({ topics, className }: PopularTopicsProps) {
  return (
    <div className={`max-w-[400px] ${className}`}>
      <div>
        <span className="text-sm text-soft-foreground">What's hot</span>
        <h1 className="font-extrabold text-lg">Most Pouplar</h1>
      </div>
      {topics && (
        <ul className="flex flex-col mt-8 gap-6">
          {topics.map((topic) => (
            <li>
              <Topic {...topic} key={topic.id.toString()} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PopularTopics;
