import Code from "@/components/misc/Code";
import Feature from "@/components/misc/Feature";
import Nextjs from "@/components/misc/icons/Nextjs";
import ReactHookForm from "@/components/misc/icons/ReactHookForm";
import Shadcn from "@/components/misc/icons/Shadcn";
import Stacks from "@/components/misc/Stacks";
import Storybook from "@/components/misc/icons/Storybook";
import Tailwind from "@/components/misc/icons/Tailwind";
import Zod from "@/components/misc/icons/Zod";
import TypeScript from "@/components/misc/icons/TypeScript";
import { Metadata } from "next";
import Playwright from "@/components/misc/icons/Playwright";
import Prettier from "@/components/misc/icons/Prettier";
import ESLint from "@/components/misc/icons/ESLint";
import Husky from "@/components/misc/icons/Husky";
import Accent from "@/components/globals/Accent";
import React from "react";

export const metadata: Metadata = {
  description:
    "Accessibility-focused, typesafe Next.js frontend framework stack, complete with Storybook, Tailwind CSS, Shadcn, Playwright, React Hook Form, Zod, Prettier, ES Lint and Husky.",
  title: "a11y stack | Modular, Extensive, Semantic",
};

export default function Page() {
  return (
    <React.Fragment>
      <div className="flex flex-row min-h-dvh bg-chineseBlack p-4 mb-8">
        <div className="flex flex-col gap-8 max-w-6xl">
          <h1 className="sr-only">a11y-stack | home page</h1>
          <div className="flex flex-col gap-6">
            <h2>
              An <span className="accent">accessibility-focused,</span>{" "}
              type-safe Next.js frontend framework stack{" "}
            </h2>
            <p>
              Modular <Accent>|</Accent> Semantic <Accent>|</Accent> Extensible
            </p>
            <Code
              className="border border-accent"
              copy
              code="npx create-a11y-stack@latest"
            />
            <Stacks />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 min-h-dvh bg-chineseBlack mb-8">
        <div className="max-w-[80rem] p-4">
          <h3>
            {" "}
            a11y-stack is an{" "}
            <span className="accent">opinionated, unified</span> and{" "}
            <Accent>robust</Accent> framework which enforces{" "}
            <Accent>type-checking</Accent>
            {", "}
            <Accent>sound coding practices</Accent>
            {", "} <Accent>extensibility</Accent> and{" "}
            <Accent>accessibility</Accent> at the{" "}
            <Accent>forefront of development</Accent>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 mb-8">
            <Feature
              title="sound semantic practices"
              feature="Enforces proper, accessible HTML across components using correct semantics"
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
      </div>

      <div className="flex flex-col gap-6 min-h-dvh bg-chineseBlack mb-8">
        <div className="max-w-[80rem] p-4">
          <h3>
            {" "}
            created to solve <Accent>three main developer pain points</Accent>
          </h3>
          <ol className="flex flex-col md:flex-row gap-4 marker:text-accent list-decimal ml-8">
            <li className="p-4 bg-vampireBlack">
              <p>
                time spent scaffolding an app with several dependencies and
                scripts to run before actually building, wasting valuable
                development time
              </p>
            </li>
            <li className="p-4 bg-vampireBlack">
              <p>
                challenges implementing modern, a11y-focused components which
                pass Lighthouse, WCAG and other a11y testing audits
              </p>
            </li>
            <li className="p-4 bg-vampireBlack">
              <p>
                cross-dependency issues, including debugging TypeScript and
                non-TypeScript features and numerous configuration files between
                different libraries
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div className="min-h-dvh p-2 bg-chineseBlack mb-8">
        <div className="p-4">
          <div className="flex flex-col gap-4">
            <h3>
              out of the <Accent>box</Accent>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-4">
              <Feature
                title="Next.js"
                feature="A full stack framework built upon React, Next.js offers dynamic routing, API routes, extensibility with database platforms and SEO capabilities under-the-hood"
              >
                <Nextjs />
              </Feature>
              <Feature
                title="TypeScript"
                feature="A statically-typed superset of Javascript which adds additional support for types to help catch errors and bugs during compile time."
              >
                <TypeScript />
              </Feature>
              <Feature
                title="Storybook"
                feature="An extensive library which allows isolated building of UI components, including a11y, interaction and visual testing."
              >
                <Storybook />
              </Feature>
              <Feature
                title="Tailwind CSS"
                feature="A mobile-first responsive CSS framework library which uses pre-set utility classes for rapid rendering of component styling."
              >
                <Tailwind />
              </Feature>
              <Feature
                title="Shadcn"
                feature="An extensive library of ready-to-use components built upon Radix primitives, Shadcn addresses many accessibility challenges which also plays nice with Tailwind"
              >
                <Shadcn />
              </Feature>
              <Feature
                title="React Hook Form"
                feature="A lightweight, performant library for managing form state and validation in React applications, utilizing hooks to simplify form handling with minimal re-renders and an intuitive API"
              >
                <ReactHookForm />
              </Feature>
              <Feature
                title="Zod"
                feature="A TypeScript-first schema declaration and validation library that enables developers to define, validate, and infer types for complex data structures at runtime, ensuring data integrity and type safety in applications."
              >
                <Zod />
              </Feature>
              <Feature
                title="Playwright"
                feature="A powerful open-source automation framework for web testing and browser automation, including axe-core a11y integration and visual regression testing. "
              >
                <Playwright />
              </Feature>
              <Feature
                title="Prettier"
                feature="A popular, opinionated code formatter that automatically formats code to ensure consistent style across projects, supporting multiple languages and integrating seamlessly with various development environments and workflows"
              >
                <Prettier />
              </Feature>
              <Feature
                title="ESLint"
                feature="A pluggable and configurable linting library for identifying and reporting patterns in JavaScript in order to ensure code consistency and reduce bugs."
              >
                <ESLint />
              </Feature>
              <Feature
                title="Husky"
                feature="Simplifies the integration of Git hooks into development workflows, allowing task automation and enforcing code quality standards prior to commits and pushes."
              >
                <Husky />
              </Feature>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
