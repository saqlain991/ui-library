import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import img1 from "@/assets/ui-icon/Shadcn.png";

// Define the Outfit font with a variable for custom CSS usage
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HumanEra UI Library",
  description:
    "A beautiful and comprehensive UI component library built with Shadcn UI and Tailwind CSS",
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: "16x16 32x32 48x48 64x64 128x128",
        type: "image/x-icon",
      },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/favicon/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Standard Favicon */}
        <link
          rel="icon"
          href="/favicon/favicon.ico"
          sizes="16x16 32x32 48x48 64x64 128x128"
        />

        {/* PNG Icons for different devices */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-512x512.png"
          sizes="512x512"
        />

        {/* Apple Touch Icon (iOS Safari) */}
        <link
          rel="apple-touch-icon"
          href="/favicon/apple-touch-icon.png"
          sizes="180x180"
        />

        {/* Android Chrome Theme */}
        <meta name="theme-color" content="#ffffff" />
      </head>
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
