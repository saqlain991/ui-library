import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export default function DocsCard({
  links,
  title,
  children,
  image,
  className,
}: Readonly<{
  links: string;
  title: string;
  children: ReactNode;
  image: string;
  className?: string;
}>) {
  return (
    <div
      className={cn(
        "flex h-20 w-full max-w-72 cursor-pointer items-center justify-start rounded-2xl border border-transparent bg-neutral-100 backdrop-blur-[10px] transition duration-150 ease-in-out hover:scale-105 hover:border-neutral-500/20 dark:bg-neutral-800",
        className
      )}
    >
      <div
        className="ml-[14px] h-[50px] w-[50px] rounded-[10px] border border-neutral-50 dark:border-neutral-700"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      />
      <div className="ml-[10px] w-[calc(100%-90px)] text-neutral-700 dark:text-neutral-300">
        <div className="flex items-center justify-between">
          <p className="font-bold text-[16px]">{title}</p>
          <span className=" flex flex-row text-[10px] text-neutral-100 dark:text-neutral-500">
            <Link href={links} target="_blank" rel="noopener noreferrer">
              <ExternalLink
                size={20}
                className="text-neutral-600 dark:text-white"
              />
            </Link>
          </span>
        </div>
        <p className="line-clamp-2 font-light text-xs">{children}</p>
      </div>
    </div>
  );
}
