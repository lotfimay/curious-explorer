import { db } from "@/lib/db";
import { NextResponse } from "next/server";

const GET = async () => {
  try {
    const categories = await db.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
