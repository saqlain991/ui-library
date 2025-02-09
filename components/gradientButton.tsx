"use client";

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
