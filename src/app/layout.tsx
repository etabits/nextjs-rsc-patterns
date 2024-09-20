import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js RSC Patterns",
  description: "Patterns for using React Server Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Patterns list</Link>
          </nav>
        </header>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>{children}</div>
      </body>
    </html>
  );
}
