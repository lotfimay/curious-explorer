import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

interface RouteParams {
  params: { slug: string };
}

export const GET = async (req: NextRequest, { params }: RouteParams) => {
  const { slug } = params;
  try {
    const post = await db.post.findUnique({
      where: {
        slug: slug,
      },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong !" }),
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest, { params }: RouteParams) => {
  try {
    const { slug } = params;
    const session = await getServerSession(authOptions);
    const post = await db.post.findUnique({
      where: {
        slug: slug,
      },
      include: {
        user: true,
      },
    });
    const isBlogWriter = session?.user.id === post?.user.id;
    if (!isBlogWriter) {
      return new NextResponse(
        JSON.stringify({ message: "This action could not take place" }),
        { status: 401 }
      );
    }
    const deletedPost = await db.post.delete({
      where: {
        slug: slug,
      },
    });
    return new NextResponse(JSON.stringify(deletedPost), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong !" }),
      { status: 500 }
    );
  }
};
