import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const WalletConnect = () => {
  return (
    <div id="wallet-connect">
      <ConnectButton showBalance={false} />
    </div>
  );
};
