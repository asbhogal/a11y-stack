import Header from "@/components/globals/Header";
import "./globals.css";
import "@splidejs/react-splide/css";
import Footer from "@/components/globals/Footer";
import Container from "@/components/globals/Container";
import { Toaster } from "@/components/ui/sonner";
// eslint-disable-next-line import/no-unresolved
import { GeistSans } from "geist/font/sans";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className}`}>
      <body className="flex flex-col gap-2 bg-vampireBlack text-antiFlashWhite relative">
        <Header />
        <Container>{children}</Container>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
