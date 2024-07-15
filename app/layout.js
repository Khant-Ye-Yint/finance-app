import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const mono = Roboto_Mono({ subsets: ['latin'] });

import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: { template: '%s | Finance Guru', default: 'Finance Guru' },
  description: 'Your daily companion',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mono.className} flex flex-col min-h-screen `}>
        <ThemeProvider attribute="class">
          <main className="container mx-auto grow">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
