import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayoutPage from "./layoutPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProjectXplore",
  description: "Created by Parambrata Ghosh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayoutPage>{children}</MainLayoutPage>
      </body>
    </html>
  );
}
