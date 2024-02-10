"use client";
import React from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";

import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

import { Input } from "../ui/input";
import { LoginSchema } from "@/validation/schemas";
import { useForm } from "react-hook-form";
import CardWrapper from "./CardWrapper";

function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };

  return (
    <CardWrapper
      headerLabel="Welcome back !"
      backButtonLabel="Don't have an account ?"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@example.com" {...field} />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input placeholder="123455" type="password" {...field} />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md text-lg font-semibold"
            >
              Login
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
}

export default LoginForm;
