import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { SiteHeader } from "@/components/local/site-header";
import "./globals.css";

const ralewaySans = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThanasisGeo",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem("portfolio-theme");
                  var useDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
                  document.documentElement.classList.toggle("dark", useDark);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${ralewaySans.className} antialiased`}>
        <SiteHeader />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
