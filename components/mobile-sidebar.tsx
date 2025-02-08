"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { components } from "@/app/components/data";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Components", href: "/components" },
  { name: "Request", href: "/request" },
  { name: "Contact", href: "/contact" },
];

export function MobileSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
            <div className="flex flex-col gap-6">
              {/* Navigation Links */}
              <div>
                <h4 className="mb-4 text-lg font-semibold">Navigation</h4>
                <div className="grid grid-flow-row auto-rows-max gap-2 text-sm">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex w-full items-center rounded-md px-2 py-2 hover:bg-muted hover:text-foreground",
                        pathname === item.href
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Components List */}
              <div>
                <h4 className="mb-4 text-lg font-semibold">Components</h4>
                <div className="grid grid-flow-row auto-rows-max gap-2 text-sm">
                  {components.map((component) => (
                    <Link
                      key={component.href}
                      href={component.href}
                      className={cn(
                        "flex w-full items-center rounded-md px-2 py-2 hover:bg-muted hover:text-foreground",
                        pathname === component.href
                          ? "bg-muted font-medium text-foreground"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {component.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
