"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface PaginationProps {
  page: number;
  hasNext: boolean;
  hasPrevious: boolean;
  children?: React.ReactNode;
}

const Pagination = ({
  page,
  hasNext,
  hasPrevious,
  children,
}: PaginationProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-8">
      {children}
      <div className="flex items-center justify-around gap-4 w-full">
        <Button
          onClick={() => router.push(`?page=${page - 1}`, { scroll: false })}
          className="bg-red-500 w-fit"
          disabled={!hasPrevious}
        >
          {"<"} Previous
        </Button>

        <Button
          onClick={() => router.push(`?page=${page + 1}`, { scroll: false })}
          className="bg-green-500 w-fit"
          disabled={!hasNext}
        >
          Next {">"}
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
