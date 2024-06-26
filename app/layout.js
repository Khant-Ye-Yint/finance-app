import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

import { ThemeProvider } from 'next-themes';
import PageHeader from '@/components/page-header';
import Footer from '@/components/footer';

export const metadata = {
  title: { template: '%s | Finance App', default: 'Finance App' },
  description: 'Your daily companion',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class">
          <PageHeader />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
