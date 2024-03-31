import Icon from "@/components/Icon";
import Navigation from "@/components/globals/Header";
import Code from "@/components/misc/Code";
import Feature from "@/components/misc/Feature";
import Nextjs from "@/components/misc/icons/Nextjs";
import ReactHookForm from "@/components/misc/icons/ReactHookForm";
import Shadcn from "@/components/misc/icons/Shadcn";
import Stacks from "@/components/misc/icons/Stacks";
import Storybook from "@/components/misc/icons/Storybook";
import Tailwind from "@/components/misc/icons/Tailwind";
import Zod from "@/components/misc/icons/Zod";
import TypeScript from "@/components/misc/icons/TypeScript";
import { Metadata } from "next";
import Playwright from "@/components/misc/icons/Playwright";
import Prettier from "@/components/misc/icons/Prettier";
import ESLint from "@/components/misc/icons/ESLint";
import Husky from "@/components/misc/icons/Husky";
import Link from "@/components/globals/Link";
import Marquee from "react-fast-marquee";
import Pagination from "@/components/globals/Pagination";

export const metadata: Metadata = {
  title: "a11y stack | Modular, Extensive, Semantic",
  description:
    "Accessibility-focused, typesafe Next.js frontend framework stack, complete with Storybook, Tailwind CSS, Shadcn, Playwright, React Hook Form, Zod, Prettier, ES Lint and Husky.",
};

const images = [
  "https://images.unsplash.com/photo-1711703049564-907b88e2005a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1711636418389-1ee93ebd56fb?q=80&w=3862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1711703049564-907b88e2005a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
export default function Page() {
  return (
    <>
      <div className="flex flex-row min-h-dvh">
        <div className="flex flex-col gap-8 max-w-6xl">
          <h1 className="sr-only">a11y-stack | home page</h1>
          <div className="flex flex-col gap-6">
            <h2>
              An <span className="accent">accessibility-focused,</span>{" "}
              type-safe Next.js frontend framework stack{" "}
            </h2>
            <Code copy code="npx create-a11y-stack@latest" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-fit">
              <Link
                type="primary"
                ariaLabel="get-started"
                label="get-started"
                title="Get started"
                href="installation"
                external={false}
                related
              >
                Get started
              </Link>
              <Link
                type="secondary"
                ariaLabel="support"
                label="support"
                title="Support"
                href="support"
                external={false}
                related
              >
                Support
              </Link>
            </div>
            <Stacks />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 min-h-dvh">
        <h3>
          {" "}
          a11y-stack is an <span className="accent">
            opinionated, unified
          </span>{" "}
          and <span className="accent">robust</span> framework which enforces{" "}
          <span className="accent">type-checking</span>,{" "}
          <span className="accent">sound coding practices</span> and{" "}
          <span className="accent">extensibility </span>whilst placing{" "}
          <span className="accent">accessibility</span> at the{" "}
          <span className="accent">forefront of development</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Feature
            title="sound semantic practices"
            feature="Enforces proper, accessible HTML across components using correct semantics"
          />
          <Feature
            title="enforces type safety"
            feature="TypeScript, Zod schema validation and code formatting all work together"
          />
          <Feature
            title="extensibility"
            feature="Turn this into a full stack framework using Prisma, Drizzle, Payload, Next Auth etc."
          />
        </div>
      </div>

      <div className="min-h-dvh">
        <h3>
          {" "}
          created to solve{" "}
          <span className="accent">three main developer pain points</span>
        </h3>
        <ol className="marker:text-accent list-decimal ml-8">
          <li className="">
            time spent scaffolding an app with several dependencies and scripts
            to run before actually building, wasting valuable development time
          </li>
          <li>
            challenges implementing modern, a11y-focused components which pass
            Lighthouse, WCAG and other a11y testing audits
          </li>
          <li>
            cross-dependency issues, including debugging TypeScript and
            non-TypeScript features and numerous configuration files between
            different libraries
          </li>
        </ol>

        <p className="text-3xl">
          With one command, scaffold a modern, a11y-focused Next.js frontend
          framework and spin up a dev server, ready for development
        </p>
      </div>

      <div className="min-h-dvh">
        <div className="flex flex-col gap-4">
          <h3>
            <span className="accent">out of the box</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Feature
              title="Next.js"
              feature="A full stack framework built upon React, Next.js offers dynamic routing, API routes, extensibility with database platforms and SEO ____"
            >
              <Nextjs />
            </Feature>
            <Feature
              title="TypeScript"
              feature="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            >
              <TypeScript />
            </Feature>
            <Feature
              title="Storybook"
              feature="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            >
              <Storybook />
            </Feature>
            <Feature
              title="Tailwind CSS"
              feature="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            >
              <Tailwind />
            </Feature>
            <Feature
              title="Shadcn"
              feature="An extensive library of ready-to-use components built upon Radix primitives, Shadcn addresses many accessibility challenges by creating _______ which play nice with Tailwind"
            >
              <Shadcn />
            </Feature>
            <Feature
              title="React Hook Form"
              feature="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            >
              <ReactHookForm />
            </Feature>
            <Feature
              title="Zod"
              feature="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            >
              <Zod />
            </Feature>
            <Feature
              title="Playwright"
              feature="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            >
              <Playwright />
            </Feature>
            <Feature
              title="Prettier"
              feature="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            >
              <Prettier />
            </Feature>
            <Feature
              title="ESLint"
              feature="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            >
              <ESLint />
            </Feature>
            <Feature
              title="Husky"
              feature="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            >
              <Husky />
            </Feature>
          </div>
        </div>
        <Pagination />
      </div>
    </>
  );
}
