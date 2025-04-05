import React from 'react';
import { sideMenuItems } from '../constants/side-menu-item';
import { UserInfo } from '../features/sideMenu/user-info';
import { BalanceInfo } from '../features/sideMenu/balance-info';
import demoUserImage from '../assets/img/user.jpg';
import { MenuList } from '../features/sideMenu/menu-list';

export const SideMenu = () => {
  return (
    <aside
      className="flex flex-none max-w-[250px] flex-col border-r border-r-4 border-theme-red px-4 py-[60px] min-h-12 bg-black fixed top-0 bottom-0 left-0 right-0 z-[9] side-menu"
      data-open="false"
    >
      {/* User Info */}
      <UserInfo userImage={demoUserImage} name="UserName" vip="VIP Lv.2" />
      {/* Balance Info */}
      <BalanceInfo balance="1,000k+" />

      {/* Menu List */}
      <MenuList sideMenuItems={sideMenuItems}/>
    </aside>
  );
};
