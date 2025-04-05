import React from 'react';
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../utils/cn";

const icon = tv({
  base: "",
  variants: {
   
    themeColor: {
      red: "before:!bg-theme-red",
     
    },
    size: {
      xs: "before:!w-[12px]",
      sm: "before:!w-[16px]",
      md: "before:!w-[18px]",
      lg: "before:!w-[24px]",
    },
  },
  defaultVariants: {
    rotate: 0,
    size: "sm",
  },
});

type IconProps = VariantProps<typeof icon> & {
  name: string;
  className?: string;
  rotate?: number;
};

export const Icon = ({ name, rotate, themeColor, size, className }: IconProps) => {
  return (
    <i
      className={cn(
        `icon-${name}`,
        icon({  themeColor, size }),
        rotate && `transform rotate-${rotate}`,
        className
      )}
    />
  );
};
