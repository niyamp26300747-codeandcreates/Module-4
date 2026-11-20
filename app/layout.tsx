import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";


export const metadata: Metadata = {
  title: "NextBites",
  description: "Quick, everyday recipes built with Next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        <header className="border-b border-neutral-200 bg-white">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-orange-600">
              NextBites
            </Link>
            <div className="flex gap-6 text-sm font-medium text-neutral-600">
              <Link href="/" className="hover:text-neutral-900">
                Recipes
              </Link>
            </div>
          </nav>
        </header>


        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
      </body>
    </html>
  );}