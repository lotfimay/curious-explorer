import BlogList from "@/components/BlogList";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import PopularTopics from "@/components/PopularTopics";
export default function Home() {
  const data = [
    {
      id: 1,
      user: "lotfi_may",
      title: "My journey as a foreign student in France",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et magni, eum deserunt veniam at, asperiores quaerat eius sint quos aut quas sed. Fuga doloribus dicta rem vel similique praesentium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et magni, eum deserunt veniam at, asperiores quaerat eius sint quos aut quas sed. Fuga doloribus dicta rem vel similique praesentium!",
      posted_at: Date.now(),
    },
    {
      id: 2,
      user: "lotfi_may",
      title: "My journey as a foreign student in France",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et magni, eum deserunt veniam at, asperiores quaerat eius sint quos aut quas sed. Fuga doloribus dicta rem vel similique praesentium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et magni, eum deserunt veniam at, asperiores quaerat eius sint quos aut quas sed. Fuga doloribus dicta rem vel similique praesentium!",
      posted_at: Date.now(),
    },
    {
      id: 3,
      user: "lotfi_may",
      title: "My journey as a foreign student in France",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et magni, eum deserunt veniam at, asperiores quaerat eius sint quos aut quas sed. Fuga doloribus dicta rem vel similique praesentium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et magni, eum deserunt veniam at, asperiores quaerat eius sint quos aut quas sed. Fuga doloribus dicta rem vel similique praesentium!",
      posted_at: Date.now(),
    },
    {
      id: 4,
      user: "lotfi_may",
      title: "My journey as a foreign student in France",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et magni, eum deserunt veniam at, asperiores quaerat eius sint quos aut quas sed. Fuga doloribus dicta rem vel similique praesentium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae et magni, eum deserunt veniam at, asperiores quaerat eius sint quos aut quas sed. Fuga doloribus dicta rem vel similique praesentium!",
    },
  ];

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
      <div className="flex justify-between mt-4 gap-2">
        <BlogList className="flex-4" blogs={data} />
        <PopularTopics topics={topics} className="flex-3" />
      </div>
    </>
  );
}
