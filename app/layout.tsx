import Header from '@/components/globals/Header';
import './globals.css';
import Footer from '@/components/globals/Footer';
import Container from '@/components/globals/Container';
import { Toaster } from '@/components/ui/sonner';

import localFont from 'next/font/local';

const boska = localFont({
  display: 'swap',
  src: [
    { path: '../public/fonts/Boska-Variable.woff2', style: 'normal' },
    { path: '../public/fonts/Boska-VariableItalic.woff2', style: 'italic' },
  ],
  variable: '--font-boska',
});

const generalSans = localFont({
  display: 'swap',
  src: [
    { path: '../public/fonts/GeneralSans-Variable.woff2', style: 'normal' },
    {
      path: '../public/fonts/GeneralSans-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-generalSans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${generalSans.variable} ${boska.variable}`}>
      <body className="flex flex-col bg-vampireBlack text-antiFlashWhite relative">
        <Header />
        <Container>{children}</Container>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
