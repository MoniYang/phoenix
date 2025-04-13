import React from "react";
import { cn } from "../../../utils/cn";
import { Button } from "../../ui/button";
import { Text } from "../../ui/text";

type BalanceInfoProps = {
	balance: string;
	userImage: string;
};

export const HeaderBalance = ({ balance, userImage }: BalanceInfoProps) => {
	return (
		<div className="flex items-center ml-auto space-x-1">
			<Button
				className={cn(
					"flex  items-center p-1 justify-center border border-white text-white rounded-full text-sm",
				)}
			>
				<Text className="px-1.5">{balance} </Text>
				<i className="icon-add before:!w-5"></i>
			</Button>

			<div className="flex flex-none  w-[28px] h-[28px] border border-white  rounded-full text-sm">
				<img className="w-fit rounded-full" src={userImage} alt="" />
			</div>
		</div>
	);
};
