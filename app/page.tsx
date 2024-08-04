import RecentBlogs from "@/components/blog/RecentBlogs";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import PopularTopics from "@/components/PopularTopics";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    searchParams["page"] && typeof searchParams["page"] === "string"
      ? parseInt(searchParams["page"])
      : 1;

  const cat =
    typeof searchParams["cat"] === "string" ? searchParams["cat"] : "";

  return (
    <>
      <Featured />
      <Categories className="mt-4" />
      <div className="flex my-4">
        <RecentBlogs className="w-[70%]" page={page} category={cat} />
        <PopularTopics className="ml-8" />
      </div>
    </>
  );
}
