import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm lg:text-base xl:text-lg font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 font-sans font-semibold  text-center capitalize text-white",
  {
    variants: {
      variant: {
        outline:
          "border border-white rounded-lg bg-black",
        contained: "bg-[var(--primary)] rounded-lg text-white",
        text: ""
      },
      size: {
        default: "py-[0.9em] px-[6em] text-[18px] leading-5 tracking-[0]",
      },
    },
    defaultVariants: {
      variant: "contained",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
