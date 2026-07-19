import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "深圳大学招生志愿者协会 | 2026招新",
  description: "深圳大学招生志愿者协会（深大招协）2026年招新官网。我的深大我宣传，期待你的加入！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}