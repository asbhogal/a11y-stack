'use client';

import { toast } from 'sonner';
import { Button } from '../ui/button';
import Clipboard from './icons/Clipboard';

interface CodeProps {
  className?: string;
  code: string;
  copy?: boolean;
}

export default function Code({ code, copy, className }: CodeProps) {
  function handleCopyToClipboard() {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard');
  }

  return (
    <figure
      className={[
        'flex items-center gap-4 bg-chineseBlack text-antiFlashWhite px-2 md:px-4 w-fit',
        className,
      ].join(' ')}
    >
      <pre role="img" aria-label={code}>
        <code className="text-xs md:text-lg">{code}</code>
      </pre>
      <Button
        type="button"
        aria-labelledby="button-label"
        variant="secondary"
        className="p-0"
        /* eslint-disable-next-line react/jsx-no-bind */
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
