import { db } from "@/lib/db";
import Image from "next/image";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CommentsList from "@/components/comments/CommentsList";

const getData = async (slug: string) => {
  try {
    const post = await db.post.findUnique({
      where: {
        slug: slug,
      },
      include: {
        user: true,
      },
    });
    return post;
  } catch (error) {
    throw new Error("Failed");
  }
};

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const session = await getServerSession(authOptions);
  const data = await getData(slug);
  const isBlogAuthor = session?.user.id === data?.user.id;

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:gap-12">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
            {data?.title}
          </h1>
          <div className="flex items-center gap-5">
            {data?.user?.image && (
              <div className="relative w-12 h-12">
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col gap-1 text-gray-500">
              <span className="text-lg font-medium">{data?.user.name}</span>
              <span className="text-sm">
                {moment(data?.posted_at).format("MMMM Do YYYY, h:mm a")}
              </span>
            </div>
          </div>
        </div>
        {data?.image && (
          <div className="relative flex-1 h-80 md:block hidden">
            <Image src={data.image} alt="" fill className="object-cover" />
          </div>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-12 mt-16">
        <div className="flex-1">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: data?.description || "" }}
          />
          <div className="mt-12">
            <CommentsList postSlug={data?.slug || ""} />
          </div>
        </div>
        {/* <div className="flex-none">
          <Menu />
        </div> */}
        <div>
          {isBlogAuthor && <Button variant="destructive">Delete</Button>}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
