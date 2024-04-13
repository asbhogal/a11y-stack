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
import Pagination from "@/components/globals/Pagination";
import Accent from "@/components/globals/Accent";

export const metadata: Metadata = {
  title: "a11y stack | Accessibility-focused, typesafe Next.js stack",
  description:
    "Accessibility-focused, typesafe Next.js frontend framework stack, complete with Storybook, Tailwind CSS, Shadcn, Playwright, React Hook Form, Zod, Prettier, ES Lint and Husky.",
};

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
            <p>
              Modular <Accent>|</Accent> Semantic <Accent>|</Accent> Extensible
            </p>
            <Code
              className="border border-accent"
              copy
              code="npx create-a11y-stack@latest"
            />
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

      <div className="flex flex-col gap-6 min-h-dvh">
        <h3>
          {" "}
          created to solve <Accent>three main developer pain points</Accent>
        </h3>
        <ol className="marker:text-accent list-decimal ml-8">
          <li>
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

        <p>
          With one command, scaffold a modern, a11y-focused Next.js frontend
          framework and spin up a dev server, ready for development
        </p>

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
      </div>

      <div className="flex flex-col gap-6 min-h-dvh">
        <h3>
          out of the <Accent>box</Accent>{" "}
        </h3>
        <ul className="list-disc">
          <li>
            Next.js 14 <Accent>(app router)</Accent>
          </li>
          <li>
            Example Next.js <Accent>API routes</Accent>
          </li>
          <li>
            <Accent>Stories</Accent> for components
          </li>
          <li>
            a11y and interaction testing of pages and components within{" "}
            <Accent>Storybook UI</Accent> & <Accent>Playwright UI</Accent>
          </li>
          <li>
            <Accent>Shadcn/ui components</Accent> (built on Radix primitives)
          </li>
          <li>
            A selection of <Accent>WCAG-compliant forms</Accent> using
            React-Hook-Form and Zod (Billing, Contact, Login, Subscribe, Survey)
          </li>
          <li>
            <Accent>Custom WCAG-compliant components</Accent> (incl. links and
            icons)
          </li>
          <li>
            <Accent>Tailwind CSS</Accent>, configured with Storybook for styling
            in isolation
          </li>
          <li>
            <Accent>Linting, formatting and testing</Accent> using ES Lint,
            lint-staged and Prettier
          </li>
          <li>
            Husky configured to{" "}
            <Accent>
              run linting and e2e and a11y testing prior to commit
            </Accent>
          </li>
          <li>
            <Accent>Locally hosted</Accent> fonts
          </li>
          <li>
            Built <Accent>ground-up</Accent> using TypeScript
          </li>
        </ul>
      </div>

      <div className="min-h-dvh">
        <div className="flex flex-col gap-4">
          <h3>
            the <span className="accent">stack</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              feature="TypeScript-first schema declaration and validation library which infers types to reduce duplicate type declarations and ensure data integrity ____ shape of the data."
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
              feature="Opinionated code formatter which ensures code follows a consistent style."
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
              feature="Enables the ability to run linting, testing and formatting of code upon committing to source control."
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
