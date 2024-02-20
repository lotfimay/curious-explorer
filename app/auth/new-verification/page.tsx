"use client";
import { validateEmail } from "@/actions/auth";
import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";
import CardWrapper from "@/components/auth/CardWrapper";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { BeatLoader } from "react-spinners";
import React from "react";

function page() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    validateEmail(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Email confirmation"
      backButtonLabel="Back to login"
      backButtonUrl="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
}

export default page;
