import React from 'react';


const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <span>
      {children}
    </span>
  );
};

export { Text };
