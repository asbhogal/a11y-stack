"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Subscribe() {
  const subscribeFormSchema = z.object({
    email: z.string().email(),
  });

  const form = useForm<z.infer<typeof subscribeFormSchema>>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(subscribeFormSchema),
  });

  function onSubmit(data: z.infer<typeof subscribeFormSchema>) {
    // eslint-disable-next-line no-console
    console.log(data);
    toast("Email sent. Please check your inbox to confirm your subscription.");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormDescription>
                Sign up to our mailing list. We&apos;ll never share your email
                with anyone else.
              </FormDescription>
              <FormMessage className="error-message" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit">
          Subscribe
        </Button>
      </form>
    </Form>
  );
}
