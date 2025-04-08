import React from 'react';
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../utils/cn";

const icon = tv({
  base: "",
  variants: {
   
    iconColor: {
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
  size:  'xs'| 'sm'| 'md'| 'lg';
  iconColor?: string;

};

export const Icon = ({ name, className , iconColor, size}: IconProps) => {
  return (
    <i
      className={cn( icon({size, iconColor}),
        `icon-${name}`, className
      )}
    />
  );
};
