import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

interface RouteParams {
  params: { postId: string };
}

export const GET = async (req: NextRequest, { params }: RouteParams) => {
  try {
    const { postId } = params;
    const comments = await db.comment.findMany({
      where: {
        postId: postId,
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
    const { postId } = params;
    const session = await getServerSession(authOptions);
    const isAuthenticated = session !== null;
    if (!isAuthenticated) {
      return new NextResponse(
        JSON.stringify({ message: "User not authenticated" }),
        { status: 401 }
      );
    }
    const data = await req.json();
    const userId = session && session.user?.id;
    const newComment = await db.comment.create({
      data: {
        userId: userId,
        postId: postId,
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
