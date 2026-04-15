import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Kashvi",
  description: "Programming Course Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors">
        <ThemeProvider>
          <main className="flex-1 pt-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}