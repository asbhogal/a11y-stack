/* eslint-disable prettier/prettier */

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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

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

const source = ["website", "newsletter", "job board", "other"];

export default function Survey() {
  const surveyFormSchema = z.object({
    comments: z.string(),
    rating: z.enum(rating, { required_error: "Please select a rating" }),
    source: z.string(),
  });

  const form = useForm<z.infer<typeof surveyFormSchema>>({
    defaultValues: {
      comments: "",
      rating: undefined,
      source: "",
    },
    resolver: zodResolver(surveyFormSchema),
  });

  function onSubmit(data: z.infer<typeof surveyFormSchema>) {
    // eslint-disable-next-line no-console
    console.log(data);
    toast("Thank you for your feedback!");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How did you hear about us?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className="capitalize"
                    aria-label="Select a source"
                  >
                    <SelectValue placeholder="Select a source" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {source.map((sourceItem) => (
                    <SelectItem
                      key={sourceItem}
                      value={sourceItem}
                      className="capitalize"
                    >
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription className="sr-only">
                Select how you heard about us
              </FormDescription>
              <FormMessage className="error-message" />
            </FormItem>
          )}
        />
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
                  className="flex justify-between gap-4"
                >
                  {rating.map((ratingItem) => (
                    <FormItem
                      key={ratingItem}
                      className="flex flex-col items-center"
                    >
                      <FormLabel className="capitalize">{rating}</FormLabel>
                      <FormControl>
                        <RadioGroupItem
                          aria-label={ratingItem}
                          value={ratingItem}
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
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Do you have any comments or suggestions to help us improve our
                service?
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please enter any comments/suggestions"
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                Please enter any comments/suggestions
              </FormDescription>
              <FormMessage className="error-message" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-fit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
