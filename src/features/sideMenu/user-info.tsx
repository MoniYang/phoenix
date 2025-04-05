import React from 'react';
import { Button } from '../../components/button';

type UserInfoProps = {  
  userImage: string;
  name: string;
  vip: string;
}

export const UserInfo = ({userImage  , name ,vip }: UserInfoProps) => {
  return (
    <div className="flex flex-[0 0 auto] w-full h-fit items-center space-x-4">
        <div className="flex flex-none w-[48px] h-[48px] border border-white rounded-full text-sm">
          <img className="rounded-full" src={userImage} alt="User" />
        </div>
        <div className="flex flex-1 flex-col text-xl">
          <span className="text-white font-initial">{name}</span>
          <span className="text-theme-red">{vip}</span>
        </div>
        <Button className="ml-auto">
          <i className="icon-arrow before:!bg-theme-red"></i>
        </Button>
      </div>
  );
};
