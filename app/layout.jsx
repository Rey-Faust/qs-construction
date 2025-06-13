import './globals.css';
import React from 'react';

export const metadata = {
  title: 'QS Construction 侨水建筑',
  description: '高品质建筑施工与工程管理',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
