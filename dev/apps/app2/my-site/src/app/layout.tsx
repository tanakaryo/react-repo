// app/layout.tsx

import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SessionProvider from '../components/SessionProvider';

export const metadata: Metadata = {
  title: 'D.Node Website',
  description: 'D.Node Corporaite website built with Next.js and TypeScript.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* 全てのページに共通して表示されるヘッダー */}
        <Header />
        
        {/* 各ページのコンポーネントが挿入される場所 */}
        <SessionProvider>
        <main className="main-content">
          {children}
        </main>
        </SessionProvider>

        
        {/* 全てのページに共通して表示されるフッター */}
        <Footer />
      </body>
    </html>
  );
}