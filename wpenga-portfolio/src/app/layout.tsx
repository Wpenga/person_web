import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Wpenga | 个人作品集 - 全栈开发 & 嵌入式专家',
  description: 'Wpenga 的个人作品集，展示嵌入式开发、AI集成应用及全栈开发项目。',
  keywords: ['全栈开发', '嵌入式', 'ESP32', 'React', 'AI集成', 'TypeScript'],
  icons: {
    icon: '/icons8-malio-50.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} dark-mode`}>
        {children}
      </body>
    </html>
  );
}
