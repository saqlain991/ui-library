"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { docsData } from "./data"; // Import the arrays from a separate file
import { components } from "./../components/data"; // Import the arrays from a separate file

interface ComponentsLayoutProps {
  children: React.ReactNode;
}

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 pt-16 px-10">
      {/* Desktop sidebar - only visible on large screens */}
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r lg:sticky lg:block">
        <ScrollArea className="py-6 pr-6 lg:py-8">
          <h4 className="mb-4 px-2 text-lg font-semibold">Documentation</h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {docsData.map((docsDatas) => (
              <Link
                key={docsDatas.href}
                href={docsDatas.href}
                className={cn(
                  "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
                  pathname === docsDatas.href
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {docsDatas.title}
              </Link>
            ))}

            <Separator className="my-4 text-gray-200" />
            <h4 className="mb-4 px-2 text-lg font-semibold">Components</h4>
            {components.map((component) => (
              <Link
                key={component.href}
                href={component.href}
                className={cn(
                  "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
                  pathname === component.href
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {component.title}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <main className="relative py-6 lg:gap-10 lg:py-8">
        <div className="mx-auto w-full min-w-0">
          <div className="mb-4 space-y-1">
            <p className="text-muted-foreground">
              {components.find((c) => c.href === pathname)?.description}
            </p>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
