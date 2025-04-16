import { promoGamesImg } from "../../constants/promo";

import { PromoList, PromoTop } from "../features/promo/promoArea";

import { Content, ContentHeader, Main, Section } from "../ui/frameTag";
import { Text, TextTitle } from "../ui/text";

const PopularGames = () => {
	return (
		<Main className=" space-y-8 px-4">
			<Section>
				<TextTitle className="flex text-white space-x-2 font-bold text-2xl">
					<Text>Popular games TOP 10</Text>
				</TextTitle>
				<ContentHeader>
					<Text className="text-white-3 mr-auto">TOP 10 Ranking</Text>
					<Text className="text-lg text-white">Until : 2025 . 12 . 31</Text>
				</ContentHeader>
				<PromoTop items={promoGamesImg} />
			</Section>
			<Section>
				<ContentHeader>
					<Text className="text-white-3 mr-auto">TOP 11 to 20</Text>
				</ContentHeader>
				<Content className="flex-wrap gap-2 justify-center">
					<PromoList
						items={promoGamesImg.slice(11, 21)}
						className="flex-[0 0 auto] w-[calc(20%-0.5rem)] flex flex-wrap"
					/>
				</Content>
			</Section>
			<Section>
				<ContentHeader>
					<Text className="text-white-3 mr-auto">Below to rank 50</Text>
				</ContentHeader>
				<Content className=" flex-wrap gap-2 justify-center">
					<PromoList
						items={promoGamesImg.slice(22)}
						className="flex-[0 0 auto] w-[calc(20%-0.5rem)] flex flex-wrap"
					/>
				</Content>
			</Section>
		</Main>
	);
};

const HotGames = () => {
	return (
		<Main className=" space-y-8 px-4">
			<Section>
				<TextTitle className="flex text-white space-x-2 font-bold text-2xl">
					<Text>HOT Games</Text>
				</TextTitle>
				<ContentHeader>
					<Text className="text-white-3 mr-auto">
						The games of many players playing and winning
					</Text>
				</ContentHeader>
				<Content className="flex flex-wrap gap-2">
					<PromoList
						items={promoGamesImg}
						className="flex-[0 0 auto] w-[calc(25%-6px)]"
					/>
				</Content>
			</Section>
		</Main>
	);
};

const NewGames = () => {
	return (
		<Main className=" space-y-8 px-4">
			<Section>
				<TextTitle className="flex text-white space-x-2 font-bold text-2xl">
					<Text>New Games</Text>
				</TextTitle>
				<ContentHeader>
					<Text className="text-white-3 mr-auto">Latest Added Games</Text>
					<Text className="text-lg text-white">Added : 2025 . 12 . 31</Text>
				</ContentHeader>
				<Content className="flex-wrap gap-2">
					<PromoList
						items={promoGamesImg}
						className="flex-[0 0 auto] w-[calc(25%-6px)]"
					/>
				</Content>
			</Section>
		</Main>
	);
};

const RecentlyPlayed = () => {
	return (
		<Main className=" space-y-8 px-4">
			<Section>
				<TextTitle className="flex text-white space-x-2 font-bold text-2xl">
					<Text>Recently Played</Text>
				</TextTitle>
				<ContentHeader>
					<Text className="text-white-3 mr-auto">Last played games</Text>
				</ContentHeader>
				<Content className=" flex-wrap gap-2">
					<PromoList
						items={promoGamesImg}
						className="flex-[0 0 auto] w-[calc(25%-6px)]"
					/>
				</Content>
			</Section>
			<Section>
				<ContentHeader>
					<Text className="text-white-3 mr-auto">
						The games for past played
					</Text>
				</ContentHeader>
				<Content className=" flex-wrap gap-2">
					<PromoList
						items={promoGamesImg}
						className="flex-[0 0 auto] w-[calc(25%-6px)]"
					/>
				</Content>
			</Section>
		</Main>
	);
};

export { PopularGames, HotGames, NewGames, RecentlyPlayed };
