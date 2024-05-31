import React from 'react';
import Link from 'next/link';
import InstructionsComponent from '../components/instructionsComponent';
import Layout from './layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1>Welcome to the AI NFT Minting DApp</h1>
      <InstructionsComponent />
      <Link href="/mint">Mint your NFT</Link>
    </Layout>
  );
};

export default HomePage;
