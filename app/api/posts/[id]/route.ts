import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: { id: string };
}

export const DELETE = async (req: NextRequest, { params }: RouteParams) => {
  const { id } = params;
  console.log("post delete request");
  console.log(req);
  return new NextResponse(JSON.stringify({ message: id }), { status: 200 });
};
