"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

interface PaginationProps {
  page: number;
  hasNext: boolean;
  hasPrevious: boolean;
  children: React.ReactNode;
}

const Pagination = ({
  page,
  hasNext,
  hasPrevious,
  children,
}: PaginationProps) => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNextClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", (page + 1).toString());
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  };

  const handlePreviousClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", (page - 1).toString());
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-8">
      {children}
      <div className="flex items-center justify-around gap-4 w-full">
        <Button
          onClick={() => handlePreviousClick()}
          className="bg-red-500 w-fit hover:bg-red-300 text-foreground"
          disabled={!hasPrevious}
        >
          {"<"} Previous
        </Button>

        <Button
          onClick={() => handleNextClick()}
          className="bg-green-500 w-fit hover:bg-green-300 text-foreground"
          disabled={!hasNext}
        >
          Next {">"}
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
