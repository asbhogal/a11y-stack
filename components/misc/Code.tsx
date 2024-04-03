"use client";

import { Button } from "../ui/button";
import Clipboard from "./icons/Clipboard";
import { toast } from "sonner";

interface CodeProps {
  className?: string;
  code: string;
  copy?: boolean;
}

export default function Code({ code, copy, className }: CodeProps) {
  function handleCopyToClipboard() {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard");
  }

  return (
    <figure
      className={[
        "flex items-center gap-4 bg-chineseBlack text-antiFlashWhite px-4 rounded-md w-fit",
        className,
      ].join(" ")}
    >
      <pre role="img" aria-label={code}>
        <code>{code}</code>
      </pre>
      <Button
        aria-labelledby="button-label"
        variant="secondary"
        className="p-0"
        onClick={handleCopyToClipboard}
      >
        {copy && <Clipboard />}
        <span id="button-label" className="sr-only">
          Copy code
        </span>
      </Button>
      <figcaption id="code-caption" className="sr-only">
        A line of code, illustrated using preformatted text characters, which
        states the following: {code}
      </figcaption>
    </figure>
  );
}
