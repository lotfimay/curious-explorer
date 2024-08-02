import BlogList from "@/components/blog/BlogList";
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

  const topics = [
    {
      id: 1,
      category: "culture",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      user: "lotfi_may",
      date: "Junuary 3rd, 2024",
    },
    {
      id: 2,
      category: "culture",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      user: "lotfi_may",
      date: "Junuary 3rd, 2024",
    },
    {
      id: 3,
      category: "culture",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      user: "lotfi_may",
      date: "Junuary 3rd, 2024",
    },
    {
      id: 4,
      category: "culture",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      user: "lotfi_may",
      date: "Junuary 3rd, 2024",
    },
  ];

  return (
    <>
      <Featured />
      <Categories className="mt-4" />
      <div className="flex mt-4">
        <BlogList className="flex-1" page={page} />
        <PopularTopics topics={topics} className="" />
      </div>
    </>
  );
}
