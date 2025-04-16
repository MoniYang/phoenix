import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
import LogoFooter from "../../assets/img/logo_footer.svg";
// import type React from "react";
// import { footerItems } from "../../constants/footer-menu";
import { cn } from "../../utils/cn";
import { Icon } from "../ui/icon";

const FooterContent = () => {
	return (
		<section className="flex flex-1 flex-col px-4 py-2">
			<div className="flex flex-1 flex-col justify-center items-center  mx-auto space-y-4 mb-4">
				<img src={LogoFooter} alt="logo" />
				<p className="text-lg font-light text-center text-white">
					Terms and conditions
					<br /> Responsible Gaming AML Policy <br /> Restricted jurisdictions
					Fairness <br /> FAQ Support
				</p>
				<Icon name="18" className="before:!w-[36px] before:!h-[36px]" />
			</div>
			<p className="text-xs text-white">
				© 2024 ChatPlay. All rights reserved. ChatPlay.bet is operated by a
				company registered and established under the laws of Curaçao. Nexus
				Group Enterprises N.V. is licensed and regulated by AntillePhone N.V.
				Nexus Group Enterprises N.V.’s registration number is 139781 and its
				registered address is Dr. M.J. Hugenholzweg 25, Curacao, Unit 17-B.
			</p>
		</section>
	);
};

interface FooterProps {
	onMenuClick: () => void;
}
type FooterItem = {
	icon: string;
	text: string;
	onclick: () => void;
	selected?: boolean;
	promo?: boolean;
};

const Footer = ({ onMenuClick }: FooterProps) => {
	const navigate = useNavigate();
	const footerItems: FooterItem[] = [
		{
			icon: "menu",
			text: "Menu",
			onclick: onMenuClick,
		},
		{ icon: "home", text: "Home", onclick: () => navigate("/home") },
		{ icon: "promo", text: "Promo", onclick: () => promoEvent(), promo: true },
		{ icon: "wallet", text: "Wallet", onclick: () => walletEvent() },
		{ icon: "profile", text: "Profile", onclick: () => profileEvent() },
	];

	return (
		<footer className="flex flex-none bg-theme-darkRed2 h-[60px] px-4 py-2 fixed left-0 right-0 bottom-0 z-10">
			{footerItems.map((item, index) => (
				<div
					key={index}
					className={clsx(
						"flex flex-1 flex-col justify-center items-center text-White-opacity3 text-xs relative cursor-pointer appItem",
						{ "data-selected": item.selected },
					)}
					onClick={item.onclick}
					path={item.path}
				>
					<i
						className={clsx(
							`icon-${item.icon} mb-1`,
							item.promo &&
								"before:w-[30px] before:h-[30px] bg-theme-red rounded-full p-2 border-[5px] border-black absolute top-[-30px]",
						)}
					></i>
					<span className={cn(`text-white`, item.promo ? "mt-auto" : "")}>
						{item.text}
					</span>
				</div>
			))}
		</footer>
	);
};

export { Footer, FooterContent };
