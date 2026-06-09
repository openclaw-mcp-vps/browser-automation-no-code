import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoFlow – No-Code Browser Automation Builder",
  description: "Visual workflow builder for browser automation tasks like form filling, data scraping, and testing. Built for marketing teams and small business owners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f6c26eaf-5af9-4739-aa9e-9489e1bdeb25"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
