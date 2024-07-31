import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 3;

  const query = {
    take: POST_PER_PAGE,
    skip: (Number(page) - 1) * POST_PER_PAGE,
    where: {
      ...(cat && { categoryTitle: cat }),
    },
  };

  try {
    const [posts, count] = await db.$transaction([
      db.post.findMany(query),
      db.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "User not authenticated" }),
      { status: 401 }
    );
  }

  try {
    const id = session.user?.id;
    const data = await req.json();
    const post = await db.post.create({
      data: {
        userId: id,
        ...data,
      },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
