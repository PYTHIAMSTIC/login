import dynamic from 'next/dynamic';
import { WalletConnect } from '../components/WalletConnect';

const TorusBackground = dynamic(() => import('../components/TorusBackground'), { ssr: false });

const Home = () => {
  return (
    <div id="login-container">
      <TorusBackground />
      <div id="login-box">
        <h2>Login</h2>
        <WalletConnect />
      </div>
    </div>
  );
};

export default Home;
