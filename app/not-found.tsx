"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Assuming you're using ShadCN UI's Button

import img1 from "../public/assets/404.svg";
import { useRouter } from "next/navigation"; // For redirecting to homepage

export default function NotFound() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/"); // Redirect to homepage
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 pt-3 pb-10 ">
      <Image
        src={img1}
        alt="Page Not Found"
        width={400}
        height={400}
        className="mb-4"
        loading="lazy"
      />

      <h1 className="text-4xl font-bold mb-4 text-center">
        Oops! Lost in Space
      </h1>
      <p className="text-xl mb-8 text-center text-muted-foreground">
        Looks like you&apos;ve ventured into uncharted digital territory.
      </p>

      <div className="flex flex-row gap-2">
        {/* ShadCN Button to Go to Homepage */}
        <Button className="mb-4" onClick={handleRedirect}>
          Go to Homepage
        </Button>

        {/* ShadCN CommandDialog for Search */}
      </div>
    </div>
  );
}
