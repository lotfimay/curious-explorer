"use client";
import { useState } from "react";
import Link from "next/link";
import React, { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import LoginForm from "@/components/auth/LoginForm";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email, password);
  };
  return <LoginForm />;
}

export default page;
