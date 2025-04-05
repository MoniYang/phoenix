import React from 'react';


const Text = ({ children , className}: { children: React.ReactNode , className?: string }) => {
  return (
    <span className={className}>
      {children}
    </span>
  );
};

export { Text };
