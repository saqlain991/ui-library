import PreviewGithubStars from "@/components/github-starButton";
import { GradientButton } from "@/components/gradientButton";
import { ButtonColorful } from "@/components/ui/button-colorful";

export const ButtonExample = [
  {
    id: "example1",
    title: "Github Stars Button",
    component: (
      <div className="w-full flex flex-col gap-2 items-center ">
        <PreviewGithubStars />
      </div>
    ),
    code: `"use client";
import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import Link from "next/link";

// Utility function
const sleep = (ms: number | ' $ {number}ms ' ) => {
  let duration: number;
  if (typeof ms === "string") {
    duration = Number.parseInt(ms);
  } else {
    duration = ms;
  }
  return new Promise((resolve) => setTimeout(resolve, duration));
};

// Button Component
const GithubStarsButton = ({
  starNumber,
  href,
  children,
  className,
  ...props
}: Readonly<{
  starNumber: number;
  children?: string;
  href: string;
  className?: string;
}> &
  React.ComponentProps<"a">) => {
  return (
    <Link
      href={href}
      className={"group relative dark:bg-neutral-800 bg-neutral-200 rounded-full p-px $ {className}"}
      {...props}
      ref={props.ref as React.RefObject<HTMLAnchorElement>}
    >
      <span
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{ transform: "translateZ(0)" }}
      >
        <span
          className="inset-0 absolute pointer-events-none select-none"
          style={{
            animation: "10s ease-in-out infinite alternate border-translate",
          }}
        >
          <span
            className="block -translate-x-1/2 -translate-y-1/3  size-24 blur-xl"
            style={{
              background: "linear-gradient(135deg, #7A69F9, #F26378, #F5833F)",
            }}
          />
        </span>
      </span>
      <span
        className="inset-0 absolute pointer-events-none select-none"
        style={{
          animation: "10s ease-in-out infinite alternate border-glow-translate",
        }}
      >
        <span
          className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
          style={{
            animation: "10s ease-in-out infinite alternate border-glow-scale",
            background: "linear-gradient(135deg, #7A69F9, #F26378, #F5833F)",
          }}
        />
      </span>

      <span className="flex items-center justify-center gap-1 relative z-[1] dark:bg-neutral-950/90 bg-neutral-50/90 rounded-full py-2 px-4 pl-2 w-full">
        <span className="relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg]">
          <CuicuiStarIcon
            className="opacity-80 dark:opacity-100"
            style={{
              animation:
                "14s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate star-rotate",
            }}
          />
          <span
            className="rounded-full size-11 absolute opacity-0 dark:opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg"
            style={{
              animation: "14s ease-in-out infinite alternate star-shine",
              background:
                "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
            }}
          />
        </span>
        <NumberFlow
          value={starNumber}
          isolate={true}
          trend={0}
          spinTiming={{ duration: 1500, easing: "ease-in-out" }}
          className="z-20 dark:text-neutral-500 text-neutral-400 text-xs font-semibold tracking-tighter"
        />
        {children && (
          <span className="bg-gradient-to-b ml-1.5 dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-xs text-transparent group-hover:scale-105 transition transform-gpu">
            {children}
          </span>
        )}
      </span>
    </Link>
  );
};

// Star Icon Component
const CuicuiStarIcon = ({ ...props }: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Star Icon</title>
      <path
        d="M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6482 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z"
        fill="url(#paint0_linear_171_8212)"
        stroke="url(#paint1_linear_171_8212)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_171_8212"
          x1="-0.5"
          y1="9"
          x2="15.5"
          y2="-1.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A69F9" />
          <stop offset="0.575" stopColor="#F26378" />
          <stop offset="1" stopColor="#F5833F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_171_8212"
          x1="-0.5"
          y1="9"
          x2="15.5"
          y2="-1.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A69F9" />
          <stop offset="0.575" stopColor="#F26378" />
          <stop offset="1" stopColor="#F5833F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Main component
export default function PreviewGithubStars() {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    sleep(1000).then(() => {
      setStars(1078);
    });
  }, []);

  return (
    <GithubStarsButton
      href="https://github.com/saqlain991/ui-library"
      starNumber={stars}
      className="w-64 items-center justify-center"
    >
      Star ui-library on GitHub
    </GithubStarsButton>
  );
}
 `,
  },
  {
    id: "example2",
    title: "Gradient Colorful Button",
    component: (
      <div className="w-full flex flex-col gap-2 items-center ">
        <ButtonColorful />
      </div>
    ),
    code: `import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export function ButtonColorful({
  className,
  label = "Explore Components",
  ...props
}: ButtonColorfulProps) {
  return (
    <Button
      className={cn(
        "relative h-11 px-4 overflow-hidden",
        "bg-zinc-900 dark:bg-zinc-100",
        "transition-all duration-200",
        "group ",
        className
      )}
      {...props}
    >
      {/* Gradient background effect */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
          "opacity-40 group-hover:opacity-80",
          "blur transition-opacity duration-500"
        )}
      />

      {/* Content */}
      <div className="relative flex items-center justify-center gap-2">
        <span className="text-white dark:text-zinc-900">{label}</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />
      </div>
    </Button>
  );
}
 `,
  },
  {
    id: "example3",
    title: "Gradient Button",
    component: (
      <div className="w-full h-64 flex flex-col gap-2 items-center overflow-hidden px-4 sm:px-6 lg:px-8 ">
        <GradientButton>Default</GradientButton>

        <GradientButton variant="primary">Primary</GradientButton>

        <GradientButton variant="secondary">Secondary</GradientButton>

        <GradientButton variant="teal">Teal</GradientButton>

        <GradientButton variant="purple">Purple</GradientButton>

        <GradientButton variant="sunset">Sunset</GradientButton>

        <GradientButton variant="green">Green</GradientButton>
      </div>
    ),
    code: `"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Tailwind-specific configuration for the button styles
const gradientButtonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-[11px] min-w-[132px] px-9 py-4",
    "text-base leading-[19px] font-[500] text-white",
    "font-sans font-bold",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "relative appearance-none cursor-pointer",
    "transition-all duration-500 ease-in-out",
  ],
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#000022] to-[#1f3f6d]", // Default gradient
        primary: "bg-gradient-to-r from-blue-500 to-indigo-600", // Primary gradient
        secondary: "bg-gradient-to-r from-pink-500 to-yellow-500", // Secondary gradient
        teal: "bg-gradient-to-r from-teal-400 to-blue-500", // Teal gradient
        purple: "bg-gradient-to-r from-purple-400 to-pink-500", // Purple gradient
        sunset: "bg-gradient-to-r from-orange-500 to-red-500", // Sunset gradient
        green: "bg-gradient-to-r from-green-400 to-teal-500", // Green gradient
      },
      size: {
        small: "px-6 py-2 text-sm", // Small size variant
        medium: "px-9 py-4 text-base", // Medium size variant
        large: "px-12 py-6 text-lg", // Large size variant
      },
    },
    defaultVariants: {
      variant: "default", // Default variant on load
      size: "medium", // Medium size by default
    },
  }
);

// Define the type for valid variants
type GradientButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "teal"
  | "purple"
  | "sunset"
  | "green";

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  (
    { className, variant = "default", size, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Define separate hover effects for each gradient variant
    const hoverEffects: Record<GradientButtonVariant, string> = {
      default: "hover:from-[#c96287] hover:to-[#cc7d23]", // Default hover effect
      primary: "hover:from-blue-600 hover:to-indigo-700", // Primary hover effect
      secondary: "hover:from-pink-400 hover:to-yellow-300", // Secondary hover effect
      teal: "hover:from-teal-500 hover:to-blue-600", // Teal hover effect
      purple: "hover:from-purple-500 hover:to-pink-600", // Purple hover effect
      sunset: "hover:from-orange-400 hover:to-red-400", // Sunset hover effect
      green: "hover:from-green-500 hover:to-teal-600", // Green hover effect
    };

    // Check for the variant and provide the correct hover effect
    const hoverEffect = hoverEffects[variant as GradientButtonVariant];

    return (
      <Comp
        className={cn(
          gradientButtonVariants({ variant, size, className }),
          hoverEffect // Add hover effects for each gradient variant
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton, gradientButtonVariants };
`,
  },
];
