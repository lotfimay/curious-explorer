import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

interface RouteParams {
  params: { postSlug: string };
}

export const GET = async (req: NextRequest, { params }: RouteParams) => {
  try {
    const { postSlug } = params;
    const comments = await db.comment.findMany({
      where: {
        post: {
          slug: postSlug,
        },
      },
      include: {
        user: true,
      },
    });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong !" }),
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest, { params }: RouteParams) => {
  try {
    const { postSlug } = params;
    const session = await getServerSession(authOptions);
    const isAuthenticated = session !== null;
    if (!isAuthenticated) {
      return new NextResponse(
        JSON.stringify({ message: "User not authenticated" }),
        { status: 401 }
      );
    }
    const post = await db.post.findUnique({ where: { slug: postSlug } });
    const data = await req.json();
    const userId = session.user?.id;
    const newComment = await db.comment.create({
      data: {
        postId: post?.id,
        userId: userId,
        ...data,
      },
    });
    return new NextResponse(JSON.stringify(newComment), { status: 201 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong !" }),
      { status: 500 }
    );
  }
};
