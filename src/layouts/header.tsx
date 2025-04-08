// import React from 'react';
import logoHeader from '../assets/img/logo_header.svg';
import Dropdown from '../components/dropdown';
import { LANG_ITEMS } from '../constants/lang';
import { HeaderBalance } from '../features/header/header-balance';
import demoUserImage from '../assets/img/user.jpg';
// import {cn} from '../utils/cn';

export const Header = () => {
  return (
    <header className="flex flex-initial items-center px-2 min-h-10 bg-theme-red sticky top-0 z-20">
     <div className="flex flex-1 max-w-[140px]">
         <img src={logoHeader} alt="Logo Header" />
      </div>
      <Dropdown
        options={LANG_ITEMS}
        defaultValue={LANG_ITEMS[0]}
        onChange={(lang) => {
          console.log('Selected language code:', lang);
        }}
        variant='lang'
        className="max-w-[50px] border-y-0 border-r-0 border-l border-white/10"
      />
      <HeaderBalance balance="1,000k+" userImage={demoUserImage} />
    
     
   </header>
  );
};
