import Link from "./Link";
import Icon from "../Icon";

type LinksType = {
  id: number;
  title: string;
  href: string;
  label: string;
};

export const links: LinksType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    label: "home",
  },
  {
    id: 2,
    title: "Introduction",
    href: "/introduction",
    label: "introduction",
  },
  {
    id: 3,
    title: "Installation",
    href: "/installation",
    label: "installation",
  },
  {
    id: 4,
    title: "Components",
    href: "/components",
    label: "components",
  },
  {
    id: 5,
    title: "Support",
    href: "/support",
    label: "support",
  },
  {
    id: 6,
    title: "Contribute",
    href: "/contribute",
    label: "contribute",
  },
];

export default function Header() {
  return (
    <header className="flex flex-col p-4">
      <nav>
        <ul className="flex flex-col gap-1 list-none">
          {links.map((link) => (
            <li key={link.id} className="">
              <Link
                type="tertiary"
                related={false}
                ariaLabel={link.label}
                label={link.label}
                title={link.title}
                external={false}
                href={link.href}
                className="font-mono uppercase"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        label="github repo"
        title="GitHub Repo"
        ariaLabel="GitHub Repo"
        external
        related={true}
        type="tertiary"
        href="https://github.com/asbhogal/a11y-stack"
      >
        <span className="sr-only">GitHub repo</span>
        <Icon
          title="GitHub logo"
          description="A silhouette of a cat"
          className="h-6 w-6"
          svgProps={{
            viewBox: "0 0 98 96",
            xmlns: "http://www.w3.org/2000/svg",
          }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
            fill="#fff"
          />
        </Icon>
      </Link>
    </header>
  );
}
