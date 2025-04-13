// PromoSwiper.tsx
import type React from "react";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import type { SwiperModule } from "swiper/types";
import { cn } from "../../../utils/cn";
import { Icon } from "../../ui/icon";

type PromoSwiperProps = {
	items: string[];
	img?: string;
	minH?: string;
	className?: string;
	slidesPerView?: number | "auto" | undefined;
	pagination?: { clickable: boolean } | null; // 允许传递 null
	modules?: SwiperModule[] | null; // 允许传递 null
	swiperTriggerClass: string;
};

const PromoSwiper: React.FC<PromoSwiperProps> = ({
	items,
	className,
	swiperTriggerClass,
	slidesPerView,
	pagination,
	modules,
}) => {
	return (
		<div className="min-w-0">
			<Swiper
				className={swiperTriggerClass}
				pagination={pagination || undefined} // 如果为 null，传递 undefined
				modules={modules || undefined} // 如果为 null，传递 undefined
				loop={true}
				slidesPerView={slidesPerView}
			>
				{items.map((item, index) => (
					<SwiperSlide key={`${index}_${item}`}>
						<div className={cn("rounded-2xl", className)}>
							<img className="rounded-[inherit] w-full" src={item} alt={item} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

const chunkArray = (arr: string[], size: number) => {
	const result = [];
	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size));
	}
	return result;
};

type PromoSwiperChuckProps = Omit<PromoSwiperProps, "swiperTriggerClass">;
const PromoSwiperChuck: React.FC<PromoSwiperChuckProps> = ({ items }) => {
	const groupedItems = chunkArray(items, 10); // 每組 10 張

	return (
		<div className="min-w-0 relative">
			<Swiper
				className="swiper-chuck"
				navigation={{
					nextEl: ".swiper-chuck-next",
					prevEl: ".swiper-chuck-prev",
				}}
				modules={[Navigation]}
				loop={true}
			>
				{groupedItems.map((group, index) => {
					const firstRow = group.slice(0, 5);
					const secondRow = group.slice(5, 10);

					return (
						<SwiperSlide key={`${index}_${group}`}>
							<div className="flex flex-col gap-2">
								<div className="flex justify-center gap-2">
									{firstRow.map((item, i) => (
										<div className="w-1/5 rounded-2xl" key={`row1-${i}`}>
											<img
												className="rounded-[inherit] w-full"
												src={item}
												alt={`promo-${item}`}
											/>
										</div>
									))}
								</div>
								<div className="flex justify-center gap-2">
									{secondRow.map((item, index) => (
										<div className="w-1/5 rounded-2xl" key={`${index}_${item}`}>
											<img
												className="rounded-[inherit] w-full"
												src={item}
												alt={`promo-${item}`}
											/>
										</div>
									))}
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className="swiper-chuck-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
				<Icon name="arrow" size="lg" className="rotate-180 text-theme-red" />
			</div>
			<div className="swiper-chuck-next absolute right-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
				<Icon name="arrow" size="lg" className="rotate-0 text-theme-red" />
			</div>
		</div>
	);
};

const PromoSwiperChuck2: React.FC<PromoSwiperChuckProps> = ({ items }) => {
	const groupedItems = chunkArray(items, 4); // 每組 10 張

	return (
		<div className="min-w-0 relative mx-8">
			<Swiper
				className="swiper-chuck-2"
				navigation={{
					nextEl: ".swiper-chuck-next",
					prevEl: ".swiper-chuck-prev",
				}}
				modules={[Navigation]}
				loop={true}
			>
				{groupedItems.map((group, index) => {
					return (
						<SwiperSlide key={`${index}_${group}`}>
							<div className="flex flex-col gap-2">
								<div className="flex justify-center gap-3">
									{group.map((item, i) => (
										<div className="w-1/4 rounded-2xl" key={`row1-${i}`}>
											<img
												className="rounded-[inherit] w-full"
												src={item}
												alt={`promo-${item}`}
											/>
										</div>
									))}
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className="swiper-chuck-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
				<Icon name="arrow" size="lg" className="rotate-180 text-theme-red" />
			</div>
			<div className="swiper-chuck-next absolute right-2 top-1/2 -translate-y-1/2 z-20 cursor-pointer">
				<Icon name="arrow" size="lg" className="rotate-0 text-theme-red" />
			</div>
		</div>
	);
};

export { PromoSwiper, PromoSwiperChuck, PromoSwiperChuck2 };
