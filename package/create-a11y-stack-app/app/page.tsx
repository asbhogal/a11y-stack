import { Metadata } from "next";

export const metadata: Metadata = {
  title: "a11y-stack | Modular, Extensible, Semantic",
  description:
    "Accessibility-focused, typesafe Next.js frontend framework stack, complete with Storybook, Tailwind CSS, Shadcn, Playwright, React Hook Form, Zod, Prettier, ES Lint and Husky. ",
};

export default function Page() {
  return <h1 className="text-center">Welcome to a11y-stack</h1>;
}
