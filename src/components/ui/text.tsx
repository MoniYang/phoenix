import type React from "react";
import { cn } from "../../utils/cn";
import { Icon } from "./icon";

const Text = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return <span className={className}>{children}</span>;
};

type TextTitleProps = {
	children: React.ReactNode;
	className?: string;
	icon?: string;
	iconSize?: "xs" | "sm" | "md" | "lg";
	iconColor?: "red" | "yellow" | "purple" | "blue";
};

const TextTitle = ({
	children,
	className,
	icon,
	iconSize,
	iconColor,
}: TextTitleProps) => {
	return (
		<h2 className={cn("flex items-center", className)}>
			{icon && <Icon name={icon} size={iconSize} iconColor={iconColor} />}
			{children}
		</h2>
	);
};

export { Text, TextTitle };
