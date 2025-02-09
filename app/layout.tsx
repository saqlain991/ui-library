import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define the Outfit font with a variable for custom CSS usage
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadcn UI Library",
  description:
    "A beautiful and comprehensive UI component library built with Shadcn UI and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} bg-white dark:bg-black text-black dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollArea className="h-screen w-full rounded-md ">
            <div className="relative min-h-screen sm:mb-10 md:mb-10">
              <Navbar />
              <main className="  mb-10">{children}</main>
              <MobileSidebar />
              <Toaster />
            </div>
          </ScrollArea>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
