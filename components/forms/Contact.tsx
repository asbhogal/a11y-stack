import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function Contact() {
  const contactFormSchema = z.object({
    email: z.string().email(),
    firstName: z
      .string()
      .min(3, { message: "Must be 3 or more characters long" }),
    lastName: z
      .string()
      .min(3, { message: "Must be 3 or more characters long" }),
    message: z
      .string()
      .min(3, { message: "Must be 3 or more characters long" }),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
  });

  function onSubmit(data: z.infer<typeof contactFormSchema>) {
    // eslint-disable-next-line no-console
    console.log(data);
    toast("Message sent. We will get back to you shortly");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="grid cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  Enter your first name
                </FormDescription>
                <FormMessage className="error-message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  Enter your last name
                </FormDescription>
                <FormMessage className="error-message" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Enter your email address
              </FormDescription>
              <FormMessage className="error-message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Enter your message
              </FormDescription>
              <FormMessage className="error-message" />
            </FormItem>
          )}
        />
        <Button type="submit">Send Message</Button>
      </form>
    </Form>
  );
}
