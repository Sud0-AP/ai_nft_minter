import React, { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import styles from '../styles/MintNFT.module.css';
import contractABI from "../artifacts/contracts/Ainft.sol/Ainft.json";

// Environment variables
const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY;

// Ensure environment variables are available
console.log('UNSPLASH_ACCESS_KEY:', UNSPLASH_ACCESS_KEY);
console.log('PINATA_API_KEY:', PINATA_API_KEY);
console.log('PINATA_SECRET_API_KEY:', PINATA_SECRET_API_KEY);

const MintNFT: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  const generateImage = async () => {
    setLoading(true);
    setImage(null);  // Clear the previous image
    try {
      if (!UNSPLASH_ACCESS_KEY) {
        throw new Error("Unsplash API key is not defined");
      }

      const response = await fetch(`https://api.unsplash.com/photos/random?query=${description}&client_id=${UNSPLASH_ACCESS_KEY}`);
      if (!response.ok) {
        console.error("Failed to fetch image from Unsplash");
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log("Image fetch response:", data);  // Add logging to check the response
      setImage(data.urls.regular);
    } catch (error) {
      console.error("Error fetching image:", error);
    } finally {
      setLoading(false);
    }
  };

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      setProvider(provider);
      setSigner(signer);

      const address = await signer.getAddress();
      const message = `Sign this message to connect your wallet: ${address}`;
      await signer.signMessage(message);

      setWalletConnected(true);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const mintNFT = async () => {
    if (!signer || !image) return;

    const contractAddress = process.env.CONTRACT_ADDRESS!; // Update this with your deployed contract address
    const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);

    // Convert the image URL to a blob
    const response = await fetch(image);
    const blob = await response.blob();

    // Upload to Pinata IPFS
    const formData = new FormData();
    formData.append('file', blob);

    const uploadResponse = await fetch(`https://api.pinata.cloud/pinning/pinFileToIPFS`, {
      method: 'POST',
      headers: {
        'pinata_api_key': `${PINATA_API_KEY}`,
        'pinata_secret_api_key': `${PINATA_SECRET_API_KEY}`
      },
      body: formData,
    });

    if (!uploadResponse.ok) {
      console.error("Failed to upload image to IPFS");
      return;
    }

    const uploadData = await uploadResponse.json();
    console.log("Pinata upload response:", uploadData);  // Add logging to check the response
    const url = `https://gateway.pinata.cloud/ipfs/${uploadData.IpfsHash}`;

    const transaction = await contract.createNFT(url);
    await transaction.wait();
  };

  return (
    <div className={styles.mintNFT}>
      {!walletConnected ? (
        <button onClick={connectWallet} className={styles.button}>Connect Wallet</button>
      ) : (
        <>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description for image"
            className={styles.input}
          />
          <button onClick={generateImage} className={styles.button}>Generate Image</button>
          {loading && <p className={styles.loading}>Loading...</p>}
          {image && <img src={image} alt="Generated" className={styles.image} />}
          <button onClick={mintNFT} className={styles.button} disabled={!image}>Mint NFT</button>
        </>
      )}
    </div>
  );
};

export default MintNFT;
