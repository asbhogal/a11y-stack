export default function Container({ children }: { children: React.ReactNode }) {
  return <main className="max-w-[120rem] w-full mx-auto p-4">{children}</main>;
}
