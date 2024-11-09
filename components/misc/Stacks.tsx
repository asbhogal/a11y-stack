import ESLint from './icons/ESLint';
import Husky from './icons/Husky';
import Nextjs from './icons/Nextjs';
import Playwright from './icons/Playwright';
import Prettier from './icons/Prettier';
import ReactHookForm from './icons/ReactHookForm';
import Shadcn from './icons/Shadcn';
import Storybook from './icons/Storybook';
import Tailwind from './icons/Tailwind';
import TypeScript from './icons/TypeScript';
import Zod from './icons/Zod';

export default function Stacks() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 gap-2">
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
