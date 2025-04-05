import React from 'react';
import { sideMenuItems } from '../constants/side-menu-item';

// const sideMenuItems = [
//   {
//     title: 'GAMES',
//     items: [
//       { icon: 'slot', text: 'Slot' },
//       { icon: 'live-casino', text: 'Live Casino' },
//       { icon: 'poker', text: 'Poker' },
//       { icon: 'fishing', text: 'Fishing' },
//       { icon: 'lottery', text: 'Lottery' },
//       { icon: 'sport', text: 'Sport' },
//     ],
//   },
//   {
//     title: 'MORE',
//     items: [
//       { icon: 'vip', text: 'VIP' },
//       { icon: 'affiliate', text: 'Affiliate Program' },
//       { icon: 'bonus', text: 'Bonuses' },
//     ],
//   },
// ];

export const SideMenu = () => {
  return (
    <aside
      className="flex flex-1 flex-col px-4 py-[60px] min-h-12 bg-black fixed top-0 bottom-0 left-0 right-0 z-[9] side-menu"
      data-open="false"
    >
      {/* User Info */}
      <div className="flex flex-[1_0_auto] w-full h-fit items-center space-x-4">
        <div className="flex flex-none w-[48px] h-[48px] border border-white rounded-full text-sm">
          <img className="rounded-full" src="/img/user.jpg" alt="User" />
        </div>
        <div className="flex flex-1 flex-col text-xl">
          <span className="text-white font-initial">Hi! UserName</span>
          <span className="text-theme-red">VIP Lv.2</span>
        </div>
        <button className="ml-auto">
          <i className="icon-arrow before:!bg-theme-red"></i>
        </button>
      </div>

      {/* Balance Info */}
      <div className="flex flex-[1_0_auto] py-3 border-t border-b border-slate-700 font-400 text-white mt-3">
        <div className="flex flex-1 space-x-1">
          <span>Balances:</span>
          <span>$ 1,000,000.00</span>
        </div>
        <button className="flex flex-none bg-theme-red px-3 justify-center items-center rounded-full">
          <span>Deposit</span>
        </button>
      </div>

      {/* Menu List */}
      <div className="flex flex-1 flex-col text-lg font-light pb-[80px] overflow-y-auto">
        {sideMenuItems.map((item, index) => (
          <React.Fragment key={item.title}>
            <div
              className={`flex flex-[1_0_auto] pt-4 text-slate-700 ${
                index === 0 ? 'border-t-0' : 'border-t border-slate-700'
              }`}
            >
              <span>{item.title}</span>
            </div>
            <div className="flex flex-1 flex-col pl-4 pt-4 pb-5 space-y-4 text-slate-600">
              {item.items.map((subitem) => (
                <div
                  key={subitem.icon}
                  className="flex flex-1 text-white space-x-2.5"
                  data-menu-item={subitem.icon}
                >
                  <i
                    className={`before:!bg-theme-red before:!w-[18px] icon-${subitem.icon}`}
                  ></i>
                  <span className="flex-1">{subitem.text}</span>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </aside>
  );
};
