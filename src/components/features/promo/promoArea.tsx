// PromoSwiper.tsx
import type React from "react";

import "swiper/css";
import "swiper/css/pagination";

type PromoSwiperProps = {
	items: string[];
	img?: string;
	minH?: string;
};

const PromoTop: React.FC<PromoSwiperProps> = ({ items }) => {
	const groupItems = (items: string[]) => {
		return [
			items.slice(0, 3),
			items.slice(3, 6),
			items.slice(6, 10), // 最多 4 張
		];
	};
	const grouped = groupItems(items);
	return (
		<div className="space-y-4">
			{grouped.map((group, rowIndex) => (
				<div className="flex gap-4" key={`row_${rowIndex}`}>
					{group.map((item) => (
						<div
							className="flex-1 rounded-2xl"
							key={`promo_${rowIndex}_${item}`}
						>
							<img className="rounded-[inherit] w-full" src={item} alt={item} />
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default PromoTop;
