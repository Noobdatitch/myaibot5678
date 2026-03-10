import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Danish Sharma | Full-Stack Web Developer',
  description: 'Modern animated developer portfolio for Danish Sharma.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
