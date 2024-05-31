import React from 'react';
import MintNFT from './MintNFT';
import Layout from './layout';

const MintPage: React.FC = () => {
  return (
    <Layout>
      <h1>Mint Your NFT</h1>
      <MintNFT />
    </Layout>
  );
};

export default MintPage;
