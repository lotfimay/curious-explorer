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
    <div className="flex items-center justify-between gap-4">
      {hasPrevious && (
        <Button
          onClick={() => router.push(`?page=${page - 1}`)}
          className="bg-red-500"
        >
          {"<"} Previous
        </Button>
      )}
      <p>{page.toString()}</p>
      {hasNext && (
        <Button
          onClick={() => router.push(`?page=${page + 1}`)}
          className="bg-green-500"
        >
          Next {">"}
        </Button>
      )}
    </div>
  );
};

export default Pagination;
