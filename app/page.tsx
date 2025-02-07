import { Button } from "@/components/ui/button";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { ArrowRight, Blocks, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-10 w-full ">
      <HeroGeometric
        badge="UI Library"
        title1="Beautiful UI "
        title2="Components"
      />
    </div>
  );
}
