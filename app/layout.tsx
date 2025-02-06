import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";

// This th
// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
//   adjustFontFallback: true,
// });

// const outfit = Outfit({
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
//   adjustFontFallback: true,
// });

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
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
      <body className="{outfit.className} bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen  sm:mb-10 md:mb-10">
            <Navbar />
            <main className="pt-16 mx-10 mb-10">{children}</main>
            <MobileSidebar />
            <Toaster />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
