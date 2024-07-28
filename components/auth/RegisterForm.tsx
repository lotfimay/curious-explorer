// "use client";
// import React, { useState, useTransition } from "react";
// import CardWrapper from "@/components/auth/CardWrapper";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "@/components/ui/input";

// import * as z from "zod";
// import { RegisterSchema } from "@/validation/schemas";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import FormError from "../FormError";
// import { register } from "@/actions/auth";
// import FormSuccess from "../FormSuccess";

// function RegisterForm() {
//   const [isPending, startTransition] = useTransition();
//   const [error, setError] = useState<string | undefined>();
//   const [success, setSuccess] = useState<string | undefined>();

//   const handleSubmit = (values: z.infer<typeof RegisterSchema>) => {
//     setError("");
//     setSuccess("");

//     startTransition(() => {
//       register(values).then((data) => {
//         setError(data.error);
//         setSuccess(data.success);
//       });
//     });
//   };

//   const form = useForm<z.infer<typeof RegisterSchema>>({
//     resolver: zodResolver(RegisterSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//   });

//   return (
//     <CardWrapper
//       headerLabel="Welcome back !"
//       backButtonLabel="Already have an account ?"
//       backButtonUrl="/auth/login"
//     >
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>name</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="John Doe"
//                     {...field}
//                     disabled={isPending}
//                   />
//                 </FormControl>
//                 <FormMessage className="text-red-500" />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>email</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="johndoe@example.com"
//                     {...field}
//                     disabled={isPending}
//                   />
//                 </FormControl>
//                 <FormMessage className="text-red-500" />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>password</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="123455"
//                     type="password"
//                     {...field}
//                     disabled={isPending}
//                   />
//                 </FormControl>
//                 <FormMessage className="text-red-500" />
//               </FormItem>
//             )}
//           />
//           <FormError message={error} />
//           <FormSuccess message={success} />
//           <div className="flex items-center justify-center">
//             <Button type="submit" className="w-full" disabled={isPending}>
//               Create an account
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </CardWrapper>
//   );
// }

// export default RegisterForm;
