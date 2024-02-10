import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthProviders from "./AuthProviders";
import { Button } from "../ui/button";

import { useRouter } from "next/navigation";

interface CardWrapperProps {
  headerLabel: string;
  children: React.ReactNode;
  backButtonLabel: string;
  backButtonUrl?: string;
}

function CardWrapper({
  headerLabel,
  children,
  backButtonUrl,
  backButtonLabel,
}: CardWrapperProps) {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-center">
      <Card className="w-1/3">
        <CardHeader className="flex items-center justfiy-betweeen">
          <CardTitle>{headerLabel}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <AuthProviders />
        </CardFooter>
        <CardFooter>
          <Button
            variant="link"
            className="w-fit m-auto"
            onClick={() => router.push(backButtonUrl || "/")}
          >
            {backButtonLabel}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardWrapper;
