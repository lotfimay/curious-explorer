import CardWrapper from "./CardWrapper";

function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back !"
      backButtonLabel="Choose a provider to connect !"
    >
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe@example.com"
                    {...field}
                    disabled={isPending}
                    ref={inputRef}
                  />
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
                  <Input
                    placeholder="123455"
                    type="password"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormError message={urlError || error} />
          <FormSuccess message={success} />
          <div className="flex items-center justify-center">
            <Button type="submit" className="w-full" disabled={isPending}>
              Login
            </Button>
          </div>
        </form>
      </Form> */}
    </CardWrapper>
  );
}

export default LoginForm;
