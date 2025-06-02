import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { NavigationMenu } from '@/components/ui/navigation-menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ADHDapt',
  description: 'Focus better, feel better. A productivity platform for ADHD management.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
