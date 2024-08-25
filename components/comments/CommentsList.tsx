"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import moment from "moment";

const CommentItem = ({ commentId, text, posted_at, user }: Comment) => {
  return (
    <div className="mb-12" key={commentId}>
      <div className="flex items-center gap-5 mb-5">
        {user?.image && (
          <Image
            src={user.image}
            alt=""
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        )}
        <div className="flex flex-col gap-1 text-gray-600">
          <span className="font-medium">{user.name}</span>
          <span className="text-sm">
            {moment(posted_at).format("MMMM Do YYYY, h:mm a")}
          </span>
        </div>
      </div>
      <p className="text-lg font-light">{text}</p>
    </div>
  );
};

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

interface User {
  name: string;
  image?: string;
}

interface Comment {
  commentId: string;
  text: string;
  posted_at: Date;
  user: User;
}

interface CommentsListProps {
  postSlug: string;
}

const Comments = ({ postSlug }: CommentsListProps) => {
  const { status } = useSession();

  const [desc, setDesc] = useState("");

  const {
    data: comments,
    mutate,
    isLoading,
  } = useSWR(`http://localhost:3000/api/comments/${postSlug}`, fetcher);

  const handleSubmit = async () => {
    await fetch(`/api/comments/${postSlug}`, {
      method: "POST",
      body: JSON.stringify({ text: desc }),
    });
    mutate();
  };

  return (
    <div className="mt-12">
      <h1 className="text-gray-600 mb-8 text-2xl">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-8">
          <textarea
            placeholder="Write a comment..."
            className="p-5 w-full border border-gray-300 rounded-lg"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            className="px-5 py-4 bg-teal-500 text-white font-bold rounded-md"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login" className="text-teal-500 underline">
          Login to write a comment
        </Link>
      )}
      <div className="mt-12">
        {isLoading
          ? "Loading ..."
          : comments?.map((item: Comment) => (
              <CommentItem key={item.commentId} {...item} />
            ))}
      </div>
    </div>
  );
};

export default Comments;
