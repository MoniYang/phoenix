import { useState } from "react";
import demoUserImage from "../../assets/img/user.jpg";
import { sideMenuItems } from "../../constants/side-menu-item";
import { cn } from "../../utils/cn";
import { BalanceInfo } from "../features/sideMenu/balance-info";
import { MenuList } from "../features/sideMenu/menu-list";
import { UserInfo } from "../features/sideMenu/user-info";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";

interface SideMenuProps {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}
export const SideMenu = ({ isOpen, setIsOpen }: SideMenuProps) => {
	const handleClick = () => {
		setIsOpen(false); // 點擊後關閉 SideMenu
	};

	return (
		<aside
			className="flex flex-1 max-w-[250px] flex-col  border-r border-r-4 border-theme-red px-4 py-16 min-h-12 bg-black fixed top-0 bottom-0 left-0 right-0 z-[9]  side-menu"
			data-open={isOpen}
			onClick={handleClick}
		>
			<div onClick={(e) => e.stopPropagation()}>
				{/* User Info */}
				<UserInfo userImage={demoUserImage} name="UserName" vip="VIP Lv.2" />
				{/* Balance Info */}
				<BalanceInfo balance="1,000k+" />
				{/* Menu List */}
				<MenuList
					sideMenuItems={sideMenuItems}
					onClick={(e) => e.stopPropagation()}
				/>

				<Button bg="red" className="flex items-center justify-center mx-4 my-6">
					<Icon name="arrow" size="lg" className="rotate-90" />
				</Button>

				<Button
					bg="red"
					onClick={() => setIsOpen(false)}
					className={cn(
						"flex-[0 0 auto] items-center justify-center w-[24px] h-[24px] p-0 my-auto absolute top-1/2 right-[-12px] z-[1]",
					)}
				>
					<Icon name="arrow" size="xs" className="rotate-0 text-theme-red" />
				</Button>
			</div>
		</aside>
	);
};
