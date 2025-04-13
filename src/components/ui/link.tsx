import React from 'react';


type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  newTab?: boolean; // 是否在新視窗開啟
  className?:string;
};

export const Link: React.FC<LinkProps> = ({ href, newTab = false, children, className, ...rest }) => {
  return (
    <a
      href={href}
      className={className}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      {...rest}
    >
      {children}
    </a>
  );
};
