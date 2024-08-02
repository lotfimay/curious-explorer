"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface PaginationProps {
  page: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

const Pagination = ({ page, hasNext, hasPrevious }: PaginationProps) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-around gap-4 w-full">
      {
        <Button
          onClick={() => router.push(`?page=${page - 1}`, { scroll: false })}
          className="bg-red-500 w-fit"
          disabled={!hasPrevious}
        >
          {"<"} Previous
        </Button>
      }
      {
        <Button
          onClick={() => router.push(`?page=${page + 1}`, { scroll: false })}
          className="bg-green-500 w-fit"
          disabled={!hasNext}
        >
          Next {">"}
        </Button>
      }
    </div>
  );
};

export default Pagination;
