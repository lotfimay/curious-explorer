import moment from "moment";
import Image from "next/image";
import { Button } from "../ui/button";

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
