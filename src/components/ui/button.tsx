// components/ui/button.tsx
import React from "react";
import type { ReactNode } from "react";
import { type VariantProps, tv } from "tailwind-variants";
import { cn } from "../../utils/cn"; // 你自己的 cn 工具

const button = tv({
	base: "flex flex-none text-center rounded-full p-2",
	variants: {
		bg: {
			red: "text-white bg-theme-red",
		},
		border: {
			none: "",
			black: "border text-white bg-White-opacity5 border-White-opacity4",
			red: "border border-dark-red",
		},
		fontSize: {
			sm: "text-sm",
			base: "text-base",
			lg: "text-lg",
		},
		flex: {
			true: "flex items-center justify-center",
			false: "",
		},
	},
	defaultVariants: {
		border: "none",
		fontSize: "base",
	},
});

type ButtonProps = {
	selected?: string;
	className?: string;
	bg?: "red";
	border?: "none" | "black" | "red";
	fontSize?: "sm" | "base" | "lg";
	children?: ReactNode;
	onClick?: () => void;
};

const Button = ({
	selected,
	className,
	bg,
	border,
	fontSize,
	onClick,
	children,
	...props
}: ButtonProps) => {
	return (
		<button
			className={cn(button({ bg, border, fontSize }), className)}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

export { Button };
