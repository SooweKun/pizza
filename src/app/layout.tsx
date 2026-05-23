import { cn } from '@/lib/utils';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={cn('h-full antialiased bg-[#BFACC0]', 'font-mono', jetbrainsMono.variable)}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
