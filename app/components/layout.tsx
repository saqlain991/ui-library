"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const components = [
  {
    title: "Accordion",
    href: "/components/accordion",
    description: "A vertically stacked set of interactive headings.",
    componentsDesign: "Design",
    new: true,
  },
  {
    title: "Alert",
    href: "/components/alert",
    description: "Displays a callout for user attention.",
  },
  {
    title: "Alert Dialog",
    href: "/components/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content.",
    new: true,
  },
  {
    title: "Aspect Ratio",
    href: "/components/aspect-ratio",
    description:
      "A container that maintains the aspect ratio of its child element.",
    new: true,
  },
  {
    title: "Avatar",
    href: "/components/avatar",
    description: "An image element with a fallback for representing the user.",
    new: true,
  },
  // Add more components here
];

interface ComponentsLayoutProps {
  children: React.ReactNode;
}

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  const pathname = usePathname();

  return (
    <div
      className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 mt-12
    pl-5"
    >
      {/* Desktop sidebar - only visible on large screens */}
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r lg:sticky lg:block">
        <ScrollArea className="py-6 pr-6 lg:py-8">
          <h4 className="mb-4 px-2 text-xl font-bold">Components List</h4>
          <Separator className="mb-4" />
          <div className="grid grid-flow-row auto-rows-max text-sm">
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
                <p className="text-[16px] font-medium">{component.title}</p>
                <div className="ml-2">
                  {component.new ? (
                    <Badge className="bg-[#ADFA1D] h-6">New</Badge>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <main className="relative py-6 lg:gap-10 lg:py-8">
        <div className="mx-auto w-full min-w-0">
          <div className="mb-4 space-y-1">
            <h1 className="inline-block font-heading text-4xl lg:text-5xl font-bold">
              {components.find((c) => c.href === pathname)?.title ||
                "Components"}
            </h1>
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
