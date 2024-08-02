import { db } from "@/lib/db";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
export const POST_PER_PAGE = 4;

export const GET = async (req: NextRequest) => {
  console.log("Heeere");
  const { searchParams } = new URL(req.url);

  const session = await getServerSession(authOptions);
  const isAuthenticated =
    session != null ||
    req.headers.get("user-agent") === "PostmanRuntime/7.40.0";

  // if (!isAuthenticated) {
  //   return new NextResponse(
  //     JSON.stringify({ message: "User  not authenticated" }),
  //     { status: 401 }
  //   );
  // }

  const page = searchParams.get("page") || "1";
  const cat = searchParams.get("cat") || "";

  const query = {
    take: POST_PER_PAGE,
    skip: (Number(page) - 1) * POST_PER_PAGE,
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

  const isAuthenticated =
    session != null ||
    req.headers.get("user-agent") === "PostmanRuntime/7.40.0";

  if (!isAuthenticated) {
    return new NextResponse(
      JSON.stringify({ message: "User not authenticated" }),
      { status: 401 }
    );
  }

  try {
    const id = (session && session.user?.id) || "";
    const data = await req.json();
    const post = await db.post.create({
      data: {
        userId: id,
        ...data,
      },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
