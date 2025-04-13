import { Pagination } from "swiper/modules";
import { games } from "../../constants/games";
import { bannerItems, promoGamesImg } from "../../constants/promo";
import { cn } from "../../utils/cn";

import PromoTop from "../features/promo/promoArea";

import Section from "../ui/section";
import { Text, TextTitle } from "../ui/text";

const PopularGames = () => {
	return (
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
	);
};

export default PopularGames;
