"use client";
import { useRouter } from "next/navigation";

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
        <button
          onClick={() => router.push(`?page=${page - 1}`)}
          className="hover:underline"
        >
          {"<"} Previous
        </button>
      )}
      <p>{page.toString()}</p>
      {hasNext && (
        <button
          onClick={() => router.push(`?page=${page + 1}`)}
          className="hover:underline"
        >
          Next {">"}
        </button>
      )}
    </div>
  );
};

export default Pagination;
