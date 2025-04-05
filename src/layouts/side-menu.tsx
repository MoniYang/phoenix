
import { sideMenuItems } from '../constants/side-menu-item';
import { UserInfo } from '../features/sideMenu/user-info';
import { BalanceInfo } from '../features/sideMenu/balance-info';
import demoUserImage from '../assets/img/user.jpg';
import { MenuList } from '../features/sideMenu/menu-list';
import { Button } from '../components/button';
import { Icon } from '../components/icon';
import {cn} from '../utils/cn';

export const SideMenu = () => {
  return (
    <aside
      className="flex flex-1 max-w-[250px] flex-col  border-r border-r-4 border-theme-red px-4 py-6 min-h-12 bg-black fixed top-0 bottom-0 left-0 right-0 z-[9] relative side-menu"
      data-open="false"
    >
      {/* User Info */}
      <UserInfo userImage={demoUserImage} name="UserName" vip="VIP Lv.2" />
      {/* Balance Info */}
      <BalanceInfo balance="1,000k+" />
      {/* Menu List */}
      <MenuList sideMenuItems={sideMenuItems}/>

      <Button bg='red' className="flex items-center justify-center mx-4">
        <Icon name="arrow" rotate={90} />
      </Button>

      <Button bg='red' className={cn('flex-[0 0 auto] items-center justify-center w-[24px] h-[24px] p-0 my-auto absolute top-1/2 right-[-12px] z-[1]')}>
        <Icon name="arrow" rotate={45} size='xs'/>
      </Button>
    </aside>
  );
};
