import ESLint from "./ESLint";
import Husky from "./Husky";
import Nextjs from "./Nextjs";
import Playwright from "./Playwright";
import Prettier from "./Prettier";
import ReactHookForm from "./ReactHookForm";
import Shadcn from "./Shadcn";
import Storybook from "./Storybook";
import Tailwind from "./Tailwind";
import TypeScript from "./TypeScript";
import Zod from "./Zod";

export default function Stacks() {
  return (
    <div className="flex items-center gap-4">
      <Nextjs />
      <TypeScript />
      <Storybook />
      <Tailwind />
      <Shadcn />
      <ReactHookForm />
      <Zod />
      <Playwright />
      <Prettier />
      <ESLint />
      <Husky />
    </div>
  );
}
