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

const Content = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return <div className={cn("flex", className)}>{children}</div>;
};
const ContentHeader = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return <div className={cn("flex", className)}>{children}</div>;
};

const Main = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<main className={cn("flex flex-col pt-[20px] pb-[100px]", className)}>
			{children}
		</main>
	);
};

export { Section, Main, Content, ContentHeader };
