import { cn } from "../../utils/cn";
const Section = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<section className={cn("flex flex-col space-y-4", className)}>
			{children}
		</section>
	);
};

export default Section;
