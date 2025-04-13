import InfoBoardImg from "../../assets/img/Pic_InfoBoard.jpg";
import { Text } from "..//ui/text";
import { Button } from "../ui/button";

export const InfoBoard = () => {
	return (
		<div
			className="flex flex-1 flex-col rounded-xl w-full bg-contain bg-no-repeat bg-left-top bg-special-infoBoard bg-cover text-white"
			style={{ backgroundImage: `url('${InfoBoardImg}` }}
		>
			<div className="flex flex-1 flex-col justify-end px-3 space-y-4 pb-4 mt-60">
				<h3 className="text-2xl text-White-opacity1">
					The Best Online Casino
					<br />
					Gaming Experience
				</h3>
				<p className="text-White-opacity2 text-xs">
					ChatPlay is a fully-fledged online casino which goes beyond what the
					others have to offer. GAMB leads the way in an online gaming since
					2014, standing out as the go-to casino for gaming enthusiasts.
				</p>
				<p className="text-White-opacity2 text-xs">
					Enjoy fast cashouts and 24/7 support that make playing a breeze. Our
					secure and easy-to-use site gives you a top-notch gaming experience,
					with a huge selection of games right at your fingertips.
				</p>

				<Button className="flex justify-center text-white bg-theme-red rounded-full px-4 py-2 text-sm hover:bg-red-600 transition">
					<Text>Contact us</Text>
				</Button>
			</div>
		</div>
	);
};
