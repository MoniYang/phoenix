import { Pagination } from "swiper/modules";
import { games } from "../../constants/games";
import { bannerItems, promoGamesImg } from "../../constants/promo";
import { cn } from "../../utils/cn";
import { InfoBoard } from "../features/infoBoard";
import PromoTop from "../features/promo/promoArea";
import {
	PromoSwiper,
	PromoSwiperChuck,
	PromoSwiperChuck2,
} from "../features/promo/promoSwiper";
import { Text, TextTitle } from "../ui/text";
import { FooterContent } from "./footer";

import Section from "../ui/section";

const Home = () => {
	return (
		<>
			<main className="flex flex-col  space-y-8 pt-[20px] pb-[100px]">
				<Section className="px-4">
					<PromoSwiper
						items={bannerItems}
						modules={[Pagination]}
						pagination={{ clickable: true }}
						swiperTriggerClass={"banner-swiper"}
					/>
				</Section>
				<Section className="px-4">
					<TextTitle
						icon="star"
						iconSize="lg"
						iconColor="yellow"
						className="flex text-white space-x-2 font-bold text-2xl"
					>
						<Text>TOP 10</Text>
					</TextTitle>
					<PromoTop items={promoGamesImg} />
				</Section>
				<Section className="px-4">
					<TextTitle
						icon="new"
						iconSize="lg"
						iconColor="purple"
						className="flex text-white space-x-2 font-bold text-2xl"
					>
						<Text>New</Text>
					</TextTitle>
					<PromoSwiperChuck items={promoGamesImg} />
				</Section>
				<Section className="">
					<TextTitle
						icon="new"
						iconSize="lg"
						iconColor="blue"
						className="flex text-white space-x-2 font-bold text-2xl px-4"
					>
						<Text>Game Provider</Text>
					</TextTitle>
					<PromoSwiper
						className="px-1"
						items={promoGamesImg}
						slidesPerView={5}
						swiperTriggerClass={"provider-swiper"}
					/>
				</Section>
				<Section className="px-4">
					<PromoSwiper
						items={bannerItems}
						modules={[Pagination]}
						pagination={{ clickable: true }}
						swiperTriggerClass={"banner-swiper"}
					/>
				</Section>
				<Section className="">
					<TextTitle className="flex text-white space-x-2 font-bold text-2xl px-8">
						<Text>{games.SLOT}</Text>
					</TextTitle>
					<PromoSwiperChuck2 items={promoGamesImg} className="px-4" />
				</Section>
				<Section className="">
					<TextTitle className="flex text-white space-x-2 font-bold text-2xl px-8">
						<Text>{games.BACCARAT}</Text>
					</TextTitle>
					<PromoSwiperChuck2 items={promoGamesImg} className="px-4" />
				</Section>
				<Section className="">
					<TextTitle className="flex text-white space-x-2 font-bold text-2xl px-8">
						<Text>{games.POKER}</Text>
					</TextTitle>
					<PromoSwiperChuck2 items={promoGamesImg} className="px-4" />
				</Section>
				<Section className="">
					<TextTitle className="flex text-white space-x-2 font-bold text-2xl px-8">
						<Text>{games.LIVE_CASINO}</Text>
					</TextTitle>
					<PromoSwiperChuck2 items={promoGamesImg} className="px-4" />
				</Section>
				<Section className="">
					<TextTitle className="flex text-white space-x-2 font-bold text-2xl px-8">
						<Text>{games.SPORT}</Text>
					</TextTitle>
					<PromoSwiperChuck2 items={promoGamesImg} className="px-4" />
				</Section>
				<Section className="">
					<TextTitle className="flex text-white space-x-2 font-bold text-2xl px-8">
						<Text>{games.LOTTERY}</Text>
					</TextTitle>
					<PromoSwiperChuck2 items={promoGamesImg} className="px-4" />
				</Section>
				<Section className="px-4 ">
					<InfoBoard />
				</Section>
				<FooterContent />
			</main>
		</>
	);
};

export default Home;
