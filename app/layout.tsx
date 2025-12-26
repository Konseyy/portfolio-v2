import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';

import './css/globals.css';

const robotoSlab = Roboto_Slab({
  variable: '--font-roboto-slab',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Valdis - Developer',
  description: 'My personal portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.variable} font-roboto-slab @container min-h-screen w-full overflow-x-hidden antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
