import { Button } from "@/components/ui/button";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { ArrowRight, Blocks, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center gap-8 py-24 md:py-32">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="rounded-2xl bg-muted p-4">
          <Blocks className="h-12 w-12" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Beautiful UI Components
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Beautifully designed components built with Shadcn UI and Tailwind CSS.
          Free. Open Source. Production ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link href="/components">
          <ButtonColorful>Browse Components</ButtonColorful>
        </Link>
        <Link href="https://github.com/saqlain991/ui-library" target="_blank">
          <Button size="lg" variant="outline">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </Link>
      </div>
    </div>
  );
}
