import React from 'react';
import { sideMenuItems } from '../../constants/side-menu-item';

type MenuListProps = {
  sideMenuItems: typeof sideMenuItems;
}

export const MenuList = ({sideMenuItems}: MenuListProps) => {
  return (
    <div className="flex flex-1 flex-col text-lg font-light pb-[80px] overflow-y-auto">
    {sideMenuItems.map((item, index) => (
      <React.Fragment key={item.title}>
        <div
          className={`flex flex-[0 0 auto] pt-4 text-slate-700 ${
            index === 0 ? 'border-t-0' : 'border-t border-slate-700'
          }`}
        >
          <span>{item.title}</span>
        </div>
        <div className="flex flex-[0 0 auto] flex-col px-3 pb-5 space-y-2 text-slate-600">
          {item.items.map((subitem) => (
            <div
              key={subitem.icon}
              className="flex flex-1 items-center text-white space-x-2"
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
  );
};
