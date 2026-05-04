import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Promt AI Tool",
  description: "Standalone Prompt AI tool.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
