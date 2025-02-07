"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export const docsBar = [
  {
    title: "Introduction",
    href: "/docs/introduction",
    description: "A vertically stacked set of interactive headings.",
    componentsDesign: "Design",
  },
  {
    title: "Installation",
    href: "/docs/installation",
    description: "Displays a callout for user attention.",
  },
];

//
export const components = [
  {
    title: "Introduction",
    href: "/components/accordion",
    description: "A vertically stacked set of interactive headings.",
    componentsDesign: "Design",
  },
  {
    title: "Installation",
    href: "/components/alert",
    description: "Displays a callout for user attention.",
  },
  {
    title: "Accordion",
    href: "/components/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content.",
  },
  {
    title: "Alert",
    href: "/components/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content.",
  },
  {
    title: "Alert Dialog",
    href: "/components/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content.",
  },
  {
    title: "Aspect Ratio",
    href: "/components/aspect-ratio",
    description:
      "A container that maintains the aspect ratio of its child element.",
  },
  {
    title: "Avatar",
    href: "/components/avatar",
    description: "An image element with a fallback for representing the user.",
  },
  // Add more components here
];

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
            {docsBar.map((docsBars) => (
              <Link
                key={docsBars.href}
                href={docsBars.href}
                className={cn(
                  "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
                  pathname === docsBars.href
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {docsBars.title}
              </Link>
            ))}

            <Separator className="my-4 text-gray-200" />
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
            {/* <h1 className="inline-block font-heading text-4xl lg:text-5xl font-bold">
              {components.find((c) => c.href === pathname)?.title ||
                "Documentation"}
            </h1> */}
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
