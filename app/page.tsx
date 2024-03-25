import Navigation from "@/components/globals/Navigation";
import Code from "@/components/misc/Code";
import Feature from "@/components/misc/Feature";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "a11y stack | Modular, Extensive, Semantic",
  description:
    "Accessibility-focused, typesafe Next.js frontend framework stack, complete with Storybook, Tailwind CSS, Shadcn, Playwright, React Hook Form, Zod, Prettier, ES Lint and Husky.",
};

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-8 max-w-5xl">
      <h1 className="sr-only">a11y-stack | home page</h1>
      <div className="flex-1 p-12">
        <h2 className="text-8xl">
          An <span className="accent">accessibility-focused,</span> type-safe
          Next.js frontend framework stack{" "}
        </h2>
        <p>Scaffold a</p>
        <Code code="npx create-a11y-stack" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Feature
            title="Sound practices"
            feature="Enforces proper, accessible HTML across components using correct semantics and aria attributes"
          />
          <Feature
            title="enforces type safety"
            feature="TypeScript, Zod schema validation and code formatting all work together"
          />
          <Feature
            title="extensible"
            feature="Turn this into a full stack framework using Prisma, Drizzle, Payload, Next Auth etc."
          />
        </div>
      </div>
      <Navigation />
    </div>
  );
}
