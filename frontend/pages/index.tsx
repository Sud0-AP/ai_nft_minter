import React from 'react';
import InstructionsComponent from '../components/instructionsComponent';
import Layout from './layout';
import Link from 'next/link';
import  '../styles/style_1.css';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1>Welcome to the AI NFT Minting DApp</h1>
      <InstructionsComponent />
      <Link href="/mint" legacyBehavior>
        <a className={"gotoButton"}>Go to the Mint Page ➡️</a>
      </Link>
    </Layout>
  );
};

export default HomePage;
