import BlogList from "@/components/BlogList";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
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

  return (
    <>
      <Featured />
      <Categories className="mt-4" />
      <BlogList className="mt-4 bg-red-500" blogs={data} />
    </>
  );
}
