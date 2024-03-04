import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
export default function Home() {
  return (
    <>
      <Featured />
      <Categories className="mt-4" />
    </>
  );
}
