import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADA Lawsuit Risk Scanner",
  description: "Scan websites for ADA lawsuit risk factors. Identify accessibility issues that commonly trigger lawsuits and get prioritized fix recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e62ce8ae-5597-44e9-a766-873a91f314c4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
