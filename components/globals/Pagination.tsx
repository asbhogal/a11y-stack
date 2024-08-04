"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./Header";

export default function Pagination() {
  const currentPath = usePathname();

  const currentIndex = links.findIndex((link) => link.href === currentPath);

  const previousPage = currentIndex > 0 ? links[currentIndex - 1] : null;
  const nextPage =
    currentIndex < links.length - 1 ? links[currentIndex + 1] : null;

  return (
    <div className="flex justify-end py-8">
      {previousPage && (
        <Link
          title={previousPage.title}
          href={previousPage.href}
          type="tertiary"
        >
          {previousPage.title}
        </Link>
      )}
      {nextPage && (
        <Link title={nextPage.title} href={nextPage.href} type="tertiary">
          {nextPage.title}
        </Link>
      )}
    </div>
  );
}
