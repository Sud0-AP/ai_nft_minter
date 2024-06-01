import React from 'react';
import MintNFT from './MintNFT';
import Layout from './layout';
import  '../styles/styles.css';
const MintPage: React.FC = () => {
  return (
    <Layout>
      <h1>Mint Your AI Generated NFT</h1>
      <MintNFT />
    </Layout>
  );
};

export default MintPage;



