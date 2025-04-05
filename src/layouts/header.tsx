// import React from 'react';
import logoHeader from '../assets/img/logo_header.svg';

// import {cn} from '../utils/cn';

export const Header = () => {
  return (
    <header className="flex flex-initial items-center px-2 min-h-10 bg-theme-red sticky top-0 z-20">
     <div className="flex flex-1 max-w-[140px]">
         <img src={logoHeader} alt="Logo Header" />
      </div>
    
     
   </header>
  );
};
