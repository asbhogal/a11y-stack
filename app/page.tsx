import Icon from "@/components/Icon";
import Navigation from "@/components/globals/Header";
import Code from "@/components/misc/Code";
import Feature from "@/components/misc/Feature";
import Stacks from "@/components/misc/icons/Stacks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "a11y stack | Modular, Extensive, Semantic",
  description:
    "Accessibility-focused, typesafe Next.js frontend framework stack, complete with Storybook, Tailwind CSS, Shadcn, Playwright, React Hook Form, Zod, Prettier, ES Lint and Husky.",
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-8 max-w-5xl min-h-dvh">
        <h1 className="sr-only">a11y-stack | home page</h1>
        <div>
          <h2 className="text-8xl">
            An <span className="accent">accessibility-focused,</span> type-safe
            Next.js frontend framework stack{" "}
          </h2>
          <Code code="npx create-a11y-stack@latest" />
          {/*  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          </div> */}
        </div>
        <Stacks />
      </div>
      <h3 className="text-4xl">
        a11y-stack is an opinionated, unified and robust framework which
        enforces <span className="accent">type-checking</span>, sound coding
        practices and <span className="accent">extensibility</span>whilst
        placing accessibility at the forefront of development
      </h3>
    </>
  );
}
