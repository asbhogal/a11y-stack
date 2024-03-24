import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";

const rating: readonly [
  "very dissatisfied",
  "dissatisfied",
  "neutral",
  "satisfied",
  "very satisfied",
] = [
  "very dissatisfied",
  "dissatisfied",
  "neutral",
  "satisfied",
  "very satisfied",
];
export default function Survey() {
  const surveyFormSchema = z.object({
    rating: z.enum(rating, { required_error: "Please select a rating" }),
  });

  const form = useForm<z.infer<typeof surveyFormSchema>>({
    resolver: zodResolver(surveyFormSchema),
    defaultValues: {
      rating: undefined,
    },
  });

  function onSubmit(data: z.infer<typeof surveyFormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                How satisfied are you with today&apos;s service?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4"
                >
                  {rating.map((rating) => (
                    <FormItem
                      key={rating}
                      className="flex flex-col gap-4 items-center"
                    >
                      <FormLabel className="capitalize">{rating}</FormLabel>
                      <FormControl>
                        <RadioGroupItem
                          aria-label={rating}
                          value={rating}
                          className=""
                        />
                      </FormControl>
                      <FormDescription className="sr-only">
                        {rating}
                      </FormDescription>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormDescription className="sr-only">
                Please rate us on our service provided today
              </FormDescription>
              <FormMessage className="error-message" />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
