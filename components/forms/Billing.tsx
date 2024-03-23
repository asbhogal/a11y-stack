"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const billingFormSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" }),
  lastName: z.string().min(3, { message: "Must be 3 or more characters long" }),
  email: z.string().email(),
  cell: z.string().min(5, { message: "Must be 5 or more numbers long" }),
  address: z.string().min(5, { message: "Must be 5 or more characters long" }),
  zip: z.string().min(5, { message: "Must be 5 or more characters long" }),
  city: z.string().min(5, { message: "Must be 5 or more characters long" }),
  country: z.string().min(3, { message: "Must be 5 or more characters long" }),
  cardName: z.string().min(5, { message: "Must be 5 or more characters long" }),
  cardNumber: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  cardCVV: z.string().min(3).max(3, { message: "Must be 3 characters long" }),
  cardExpiryMonth: z
    .string()
    .min(2)
    .max(2, { message: "Must be 2 characters long" }),
  cardExpiryYear: z
    .string()
    .min(2)
    .max(2, { message: "Must be 2 characters long" }),
});

export function Billing() {
  const form = useForm<z.infer<typeof billingFormSchema>>({
    resolver: zodResolver(billingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      cell: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      cardName: "",
      cardNumber: "",
      cardExpiryMonth: "",
      cardExpiryYear: "",
      cardCVV: "",
    },
  });

  function onSubmit(data: z.infer<typeof billingFormSchema>) {
    const convertedData = {
      ...data,
      cardNumber: parseInt(data.cardNumber, 10),
      cardExpiryMonth: parseInt(data.cardExpiryMonth, 10),
      cardExpiryYear: parseInt(data.cardExpiryYear, 10),
      cardCVV: parseInt(data.cardCVV, 10),
    };
    console.log(convertedData);
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      <div>
        <h1>Checkout</h1>

        <Form {...form}>
          <form
            className="flex flex-col gap-4 sm:gap-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <section>
              <h2 className="overhang my-4">Billing Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
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
                      <FormLabel className="form-label">Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Enter your last name
                      </FormDescription>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">
                        Email Address
                      </FormLabel>
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
                  name="cell"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Cell Number</FormLabel>
                      <FormControl>
                        <Input placeholder="1-800-33243" {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Enter your cell number
                      </FormDescription>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
              </div>
            </section>
            <section>
              <h2 className="overhang mb-4">Shipping Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Address</FormLabel>
                      <FormControl>
                        <Input placeholder="1 Argyle Way" {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Enter your address
                      </FormDescription>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Zip Code</FormLabel>
                      <FormControl>
                        <Input placeholder="1234-978" {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Enter your zip code
                      </FormDescription>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">City</FormLabel>
                      <FormControl>
                        <Input placeholder="Dallas" {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Enter your city
                      </FormDescription>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Country</FormLabel>
                      <FormControl>
                        <Input placeholder="United States" {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Enter your country
                      </FormDescription>
                      <FormMessage className="error-message" />
                    </FormItem>
                  )}
                />
              </div>
            </section>
            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Card Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Card Name" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter the full name on your card
                  </FormDescription>
                  <FormMessage className="error-message" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Card Number</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="cardNumber"
                      render={({ field }) => (
                        <Input
                          placeholder="1234 1234 1234 1234"
                          type="number"
                          {...field}
                        />
                      )}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Enter your card number
                  </FormDescription>
                  <FormMessage className="error-message" />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="cardExpiryMonth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">
                      Card Expiry Month
                    </FormLabel>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="cardExpiryMonth"
                        render={({ field }) => (
                          <Input placeholder="MM" type="number" {...field} />
                        )}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Enter your card expiry month
                    </FormDescription>
                    <FormMessage className="error-message" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cardExpiryYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">
                      Card Expiry Year
                    </FormLabel>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="cardExpiryYear"
                        render={({ field }) => (
                          <Input placeholder="YY" type="number" {...field} />
                        )}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Enter your card expiry year
                    </FormDescription>
                    <FormMessage className="error-message" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cardCVV"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">CVV</FormLabel>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="cardCVV"
                        render={({ field }) => (
                          <Input placeholder="CVV" type="number" {...field} />
                        )}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Enter your card expiry year
                    </FormDescription>
                    <FormMessage className="error-message" />
                  </FormItem>
                )}
              />
            </div>
            <Button className="w-fit" type="submit">
              Checkout & Pay
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
