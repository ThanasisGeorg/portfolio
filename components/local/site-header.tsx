"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/local/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#profile", label: "Profile" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-background/65 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="text-sm font-semibold tracking-wide uppercase">
          ThanasisGeo
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              (link.href === "/" && pathname === "/") ||
              (link.href.startsWith("/projects") && pathname.startsWith("/projects"));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors",
                  "hover:bg-primary/10 hover:text-foreground",
                  isActive && "bg-primary/15 text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
