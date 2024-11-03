interface AccentProps {
  children: React.ReactNode;
}

export default function Accent({ children }: AccentProps) {
  return <span className="accent inline">{children}</span>;
}
