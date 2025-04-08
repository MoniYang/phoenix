import React from 'react';
import { Icon } from './icon';


const Text = ({ children , className}: { children: React.ReactNode , className?: string }) => {
  return (
    <span className={className}>
      {children}
    </span>
  );
};



const TextTitle = ({ children , className , icon , iconSize}: { children: React.ReactNode , className?: string, icon:string , iconSize: 'xs'|'sm'|'md'|'lg' }) => {
  return (
    <h2 className={className}>
      {icon && <Icon name={icon} size={iconSize} />}
      {children}
    </h2>
  );
};

export { Text , TextTitle };
