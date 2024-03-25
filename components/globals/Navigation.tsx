import Link from "next/link";

type LinksType = {
  id: number;
  label: string;
  href: string;
};

const links: LinksType[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Introduction",
    href: "/introduction",
  },
  {
    id: 3,
    label: "Installation",
    href: "/installation",
  },
  {
    id: 4,
    label: "Components",
    href: "/components",
  },
  {
    id: 5,
    label: "Support",
    href: "/support",
  },
  {
    id: 6,
    label: "Contribute",
    href: "/contribute",
  },
];

export default function Navigation() {
  return (
    <nav className="border-r border-lotion">
      <ul className="flex flex-col gap-4 list-none">
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.href} className="font-mono font-semibold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
