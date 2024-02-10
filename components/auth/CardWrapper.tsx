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

interface CardWrapperProps {
  headerLabel: string;
  children: React.ReactNode;
  backButtonLabel: string;
  bacButtonkUrl?: string;
}

function CardWrapper({
  headerLabel,
  children,
  bacButtonkUrl,
  backButtonLabel,
}: CardWrapperProps) {
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
          <Button variant="link" className="w-fit m-auto">
            {backButtonLabel}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardWrapper;
