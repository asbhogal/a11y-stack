import Header from "@/components/globals/Header";
import "./globals.css";
import Footer from "@/components/globals/Footer";
import Container from "@/components/globals/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-antiFlashWhite">
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
