import Header from "@/components/globals/Header";
import "./globals.css";
import Footer from "@/components/globals/Footer";
import Container from "@/components/globals/Container";
import { Toaster } from "@/components/ui/sonner";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-black text-antiFlashWhite">
        <Header />
        <Container>{children}</Container>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
