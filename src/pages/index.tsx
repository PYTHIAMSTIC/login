import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <ConnectButton />
    </div>
  );
};

export default Home;
