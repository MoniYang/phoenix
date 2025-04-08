import React from 'react';
import { Button } from "../../components/button";
import { Text } from "../../components/text";

type BalanceInfoProps = {
  balance: string;
}

export const BalanceInfo = ({balance}: BalanceInfoProps) => {
  return (
    <div className="flex flex-[0 0 auto] items-center py-3 border-t border-b border-slate-700 font-400 text-white mt-3">
        <div className="flex flex-1 space-x-1">
          <Text>Balance:</Text>
          <Text>{balance}</Text>
        </div>
        <Button bg="red" fontSize="sm">
          <Text>Deposit</Text>
        </Button>
    
      </div>
  );
};
