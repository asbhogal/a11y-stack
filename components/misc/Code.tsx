interface CodeProps {
  code: string;
}

export default function Code({ code }: CodeProps) {
  return (
    <figure>
      <pre className="flex" role="img" aria-label={code}>
        <code className="bg-gray text-black p-2 rounded-md">{code}</code>
      </pre>
      <figcaption id="code-caption" className="sr-only">
        A line of code, illustrated using preformatted text characters, which
        states the following: {code}
      </figcaption>
    </figure>
  );
}
