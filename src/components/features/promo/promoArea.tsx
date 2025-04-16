// PromoSwiper.tsx
import type React from "react";

import "swiper/css";
import "swiper/css/pagination";
import { cn } from "../../../utils/cn";
type PromoSwiperProps = {
	items: string[];
	img?: string;
	minH?: string;
};

const PromoList: React.FC<{ items: string[]; className?: string }> = ({
	items,
	className,
}) => {
	return (
		<>
			{items.map((item, index) => (
				<div
					className={cn(" rounded-2xl", className)}
					key={`promo_${index}_${item}`}
				>
					<img
						className="rounded-[inherit] w-full"
						src={item}
						alt={`promo-${index}`}
					/>
				</div>
			))}
		</>
	);
};

const PromoTop: React.FC<PromoSwiperProps> = ({ items }) => {
	const groupItems = (items: string[]): string[][] => {
		return [
			items.slice(0, 3),
			items.slice(3, 6),
			items.slice(6, 10), // 最多 4 張可調
		];
	};

	const groupedItems = groupItems(items);

	return (
		<div className="space-y-4">
			{groupedItems.map((group, rowIndex) => (
				<div className="flex gap-3" key={`row_${rowIndex}`}>
					<PromoList items={group} />
				</div>
			))}
		</div>
	);
};

export { PromoTop, PromoList };
