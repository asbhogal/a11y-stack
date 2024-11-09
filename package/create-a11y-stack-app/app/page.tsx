import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  description:
    'Accessibility-focused, typesafe Next.js frontend framework stack, complete with Storybook, Tailwind CSS, Shadcn, Playwright, React Hook Form, Zod, Prettier, ES Lint and Husky. ',
  title: 'a11y-stack | Modular, Extensible, Semantic',
};

export default function Page() {
  return (
    <React.Fragment>
      <h1 className="text-center">Welcome to a11y-stack</h1>
      <h2>
        To get started, head to page.tsx and start editing content. All styling
        is in the global.css
      </h2>
    </React.Fragment>
  );
}
