"use client";

import Link from "./Link";
import { links } from "./Header";
import { useRouter, usePathname } from "next/navigation";

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
          ariaLabel={previousPage.label}
          external={false}
          label={previousPage.label}
          href={previousPage.href}
          related
          type="tertiary"
        >
          {previousPage.title}
        </Link>
      )}
      {nextPage && (
        <Link
          title={nextPage.title}
          ariaLabel={nextPage.label}
          external={false}
          label={nextPage.label}
          href={nextPage.href}
          related
          type="tertiary"
        >
          {nextPage.title}
        </Link>
      )}
    </div>
  );
}
