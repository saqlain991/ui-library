"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, Blocks, Moon, Sun, Github } from "lucide-react";
import { useTheme } from "next-themes";
import Clock from "./clock";

const navigation = [
  // { name: "Home", href: "/" },
  { name: "Docs", href: "/docs" },
  { name: "Components", href: "/components" },
  { name: "Request", href: "/request" },
  { name: "Contact", href: "/contact" },
  { name: "Github", href: "https://github.com/saqlain991/ui-library" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Blocks className="h-6 w-6" />
            <span className="font-bold">UI Library</span>
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
              // target="_blank"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="hidden md:flex"
            onClick={() => setOpen(true)}
          >
            <Search className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          {/* <Button className="hidden md:flex">Get Started</Button> */}
          {/* <Button className="hidden md:flex">
            <Github size={20} /> Github
          </Button> */}
          {/* <div>
            <Clock />
          </div> */}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex flex-col">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Pages">
              {navigation.map((item) => (
                <CommandItem
                  key={item.name}
                  onSelect={() => {
                    setOpen(false);
                    window.location.href = item.href;
                  }}
                >
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </div>
      </CommandDialog>
    </header>
  );
}
