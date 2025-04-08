
import { sideMenuItems } from '../constants/side-menu-item';
import { UserInfo } from '../features/sideMenu/user-info';
import { BalanceInfo } from '../features/sideMenu/balance-info';
import demoUserImage from '../assets/img/user.jpg';
import { MenuList } from '../features/sideMenu/menu-list';
import { Button } from '../components/button';
import { Icon } from '../components/icon';
import {cn} from '../utils/cn';
import { useState } from 'react';

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <aside
      className="flex flex-1 max-w-[250px] flex-col  border-r border-r-4 border-theme-red px-4 py-16 min-h-12 bg-black fixed top-0 bottom-0 left-0 right-0 z-[9]  side-menu"
      data-open={isOpen}
    >
      {/* User Info */}
      <UserInfo userImage={demoUserImage} name="UserName" vip="VIP Lv.2" />
      {/* Balance Info */}
      <BalanceInfo balance="1,000k+" />
      {/* Menu List */}
      <MenuList sideMenuItems={sideMenuItems}/>

      <Button bg='red' className="flex items-center justify-center mx-4">
        <Icon name="arrow" size='lg'  className='rotate-90' />
      </Button>

      <Button bg='red' onClick={handleClick} className={cn('flex-[0 0 auto] items-center justify-center w-[24px] h-[24px] p-0 my-auto absolute top-1/2 right-[-12px] z-[1]')}>
        <Icon name="arrow"  size='xs'  className='rotate-0 text-theme-red'/>
      </Button>
    </aside>
  );
};
