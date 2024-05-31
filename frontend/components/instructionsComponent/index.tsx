import React from 'react';
import styles from './instructionsComponent.module.css';

const InstructionsComponent: React.FC = () => {
  return (
    <div className={styles.instructions}>
      <h2>How to Use the AI NFT Minting DApp</h2>
      <ol>
        <li>Navigate to the <a href="/mint">Mint NFT</a> page.</li>
        <li>Enter a description for the image you want to generate.</li>
        <li>Click on the "Generate Image" button to create an image using AI.</li>
        <li>Once the image is generated, review it.</li>
        <li>If you're satisfied with the image, click on the "Mint NFT" button to mint it as an NFT on the blockchain.</li>
      </ol>
    </div>
  );
};

export default InstructionsComponent;
