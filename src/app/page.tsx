// src/app/page.tsx

import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
} from '@coinbase/onchainkit/identity';
import { color } from '@coinbase/onchainkit/theme';

export default function HomePage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Decentralized Medical Records</h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
        Own your health data. Share securely. Built on BASE Blockchain
      </p>
      
    <div className="flex justify-center">
      <Wallet  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition align-content: center;">
        <ConnectWallet>
          <Avatar className="h-6 w-6" />
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
            <Avatar />
            <Name />
            <Address className={color.foregroundMuted} />
          </Identity>
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </div>
    </section>
  );
}
